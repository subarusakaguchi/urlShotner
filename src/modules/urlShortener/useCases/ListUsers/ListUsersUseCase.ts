import { User } from 'modules/urlShortener/entities/users';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class ListUsersUseCase {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}
    async execute(): Promise<User[]> {
        const allUsers = await this.usersRepository.list();

        return allUsers;
    }
}

export { ListUsersUseCase };
