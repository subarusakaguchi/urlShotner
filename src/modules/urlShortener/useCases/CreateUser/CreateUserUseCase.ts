import { User } from 'modules/urlShortener/entities/users';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}
    async execute(): Promise<User> {
        const user = await this.usersRepository.createUser();

        return user;
    }
}

export { CreateUserUseCase };
