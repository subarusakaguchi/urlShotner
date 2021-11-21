import { v4 as uuidv4, validate } from 'uuid';

import { Url } from '../../entities/urls';
import { IUrlsRepository, IUrlsRepositoryDTO } from '../IUrlsRepository';

class UrlsRepository implements IUrlsRepository {
    private urls: Url[];

    private static INSTANCE: UrlsRepository;

    constructor() {
        this.urls = [];
    }

    createUserId(): string {
        return uuidv4();
    }

    findUrlByCode(code: string): Url {
        const url = this.urls.find(url => url.code === code);

        return url;
    }
    createCode(): string {
        let code = '';

        let verify = this.verifyCode(code);

        while (verify) {
            code = '';
            for (let j = 0; j < 9; j++) {
                let symbol = Math.random().toString(36).slice(2, 3);
                if (symbol.match(/[a-z]/i)) {
                    const random = Math.floor(Math.random() * 10);
                    if (random % 2 === 0) {
                        symbol = symbol.toUpperCase();
                    }
                }
                code += symbol;
            }

            verify = this.verifyCode(code);
        }

        return code;
    }

    verifyUuid(uuid: string): boolean {
        return validate(uuid);
    }

    findUserById(user_id: string) {
        const user = this.urls.find(url => url.user_id === user_id);

        return user;
    }

    verifyCode(code: string): boolean {
        const url = this.urls.find(url => url.code === code);
        if (url || code === '') {
            return true;
        }

        return false;
    }

    createUrl({ url, code, user_id }: IUrlsRepositoryDTO): Url {
        const newUrl = new Url();

        Object.assign(newUrl, {
            user_id,
            original_url: url,
            code,
            created_at: new Date(),
        });

        this.urls.push(newUrl);

        return newUrl;
    }
    deleteUrl(code: string): void {
        throw new Error('Method not implemented.');
    }
    list(): Url[] {
        return this.urls;
    }

    public static getInstance() {
        if (!UrlsRepository.INSTANCE) {
            UrlsRepository.INSTANCE = new UrlsRepository();
        }

        return UrlsRepository.INSTANCE;
    }
}

export { UrlsRepository };
