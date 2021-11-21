import { User } from 'modules/urlShortener/entities/users';

import { IUsersRepository } from '../../repositories/IUsersRepository';

class ListUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}
    execute(): User[] {
        const allUsers = this.usersRepository.list();

        return allUsers;
    }
}

export { ListUsersUseCase };
