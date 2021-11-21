import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    url: string;
    user_id: string;
}

class CreateShortenedUrlUseCase {
    constructor(private usersRepository: IUsersRepository) {}
    execute({ url, user_id }: IRequest): string {
        const user = this.usersRepository.findUserById(user_id);

        if (!user) {
            throw new Error('User not Found');
        }

        const newUrl = this.usersRepository.createUrl({ url, user_id });

        return newUrl.code;
    }
}

export { CreateShortenedUrlUseCase };
