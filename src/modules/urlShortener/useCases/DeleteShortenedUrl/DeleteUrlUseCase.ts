import { inject, injectable } from 'tsyringe';

import { IUrlsRepository } from '../../repositories/IUrlsRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    code: string;
    user_id: string;
}

@injectable()
class DeleteUrlUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('UrlsRepository')
        private urlsRepository: IUrlsRepository,
    ) {}
    async execute({ code, user_id }: IRequest): Promise<void> {
        const user = await this.usersRepository.findUserById(user_id);

        if (!user) {
            throw new Error('User not found');
        }

        const url = await this.urlsRepository.findUrlByCode(code);

        if (!url) {
            throw new Error('Url not found');
        }

        await this.urlsRepository.deleteUrl(code, user_id);
    }
}

export { DeleteUrlUseCase };
