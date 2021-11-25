import { inject, injectable } from 'tsyringe';

import { IUrlsRepository } from '../../repositories/IUrlsRepository';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    url: string;
    user_id: string;
}

@injectable()
class CreateShortenedUrlUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
        @inject('UrlsRepository')
        private urlsRepository: IUrlsRepository,
    ) {}
    async execute({ url, user_id }: IRequest): Promise<string> {
        const user = await this.usersRepository.findUserById(user_id);

        console.log(user);

        if (!user) {
            throw new Error('User not Found');
        }

        const newUrl = await this.urlsRepository.createUrl({
            url,
            user_id,
            user,
        });

        console.log(newUrl);

        return newUrl.code;
    }
}

export { CreateShortenedUrlUseCase };
