import { User } from 'modules/urlShortener/entities/users';

import { IUsersRepository } from '../../repositories/IUsersRepository';

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}
    execute(): User {
        const user = this.usersRepository.createUser();

        return user;
    }
}

export { CreateUserUseCase };
