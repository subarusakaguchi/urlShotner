import { getRepository, Repository } from 'typeorm';

import { User } from '../../entities/users';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async createUser(): Promise<User> {
        const newUser = this.repository.create();

        await this.repository.save(newUser);

        return newUser;
    }

    async findUserById(user_id: string): Promise<User> {
        const user = await this.repository.findOne({ id: user_id });

        return user;
    }

    async list(): Promise<User[]> {
        const users = await this.repository.find();
        return users;
    }
}

export { UsersRepository };
