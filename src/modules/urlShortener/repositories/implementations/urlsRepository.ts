import { User } from 'modules/urlShortener/entities/users';
import { getRepository, Repository } from 'typeorm';

import { Url } from '../../entities/urls';
import { IUrlsRepository, IUrlsRepositoryDTO } from '../IUrlsRepository';

class UrlsRepository implements IUrlsRepository {
    private repository: Repository<Url>;

    constructor() {
        this.repository = getRepository(Url);
    }

    async catchAllUrlsFromUser(user: User): Promise<Url[]> {
        const codes = await this.repository.find({ user });

        return codes;
    }

    async findUrlByCode(code: string): Promise<Url> {
        const url = await this.repository.findOne({ code });

        return url;
    }

    async verifyCode(code: string): Promise<boolean> {
        const url = await this.findUrlByCode(code);

        if (url || code === '') {
            return true;
        }

        return false;
    }

    async createCode(): Promise<string> {
        let code = '';

        let verify = await this.verifyCode(code);

        while (verify) {
            code = '';
            for (let j = 0; j < 9; j += 1) {
                let symbol = Math.random().toString(36).slice(2, 3);
                if (symbol.match(/[a-z]/i)) {
                    const random = Math.floor(Math.random() * 10);
                    if (random % 2 === 0) {
                        symbol = symbol.toUpperCase();
                    }
                }
                code += symbol;
            }

            verify = await this.verifyCode(code);
        }

        return code;
    }

    async createUrl({ url, user }: IUrlsRepositoryDTO): Promise<Url> {
        const code = await this.createCode();

        const newUrl = await this.repository.create({
            original_url: url,
            user,
            code,
        });

        await this.repository.save(newUrl);

        return newUrl;
    }

    async deleteUrl(code: string): Promise<void> {
        await this.repository.delete({ code });
    }
}

export { UrlsRepository };
