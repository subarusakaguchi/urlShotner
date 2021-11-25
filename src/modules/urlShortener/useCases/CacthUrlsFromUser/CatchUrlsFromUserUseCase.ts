import { inject, injectable } from 'tsyringe';

import { Url } from '../../entities/urls';
import { IUrlsRepository } from '../../repositories/IUrlsRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    user_id: string;
}

@injectable()
class CatchUrlsFromUserUseCase {
    constructor(
        @inject('UrlsRepository')
        private urlsRepository: IUrlsRepository,
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    async execute({ user_id }: IRequest): Promise<Url[]> {
        const user = await this.usersRepository.findUserById(user_id);

        if (!user) {
            throw new Error('User not found');
        }

        const codes = await this.urlsRepository.catchAllUrlsFromUser(user);

        return codes;
    }
}

export { CatchUrlsFromUserUseCase };
