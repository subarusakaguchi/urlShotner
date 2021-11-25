import { User } from '../entities/users';

interface IUsersRepository {
    list(): Promise<User[]>;
    createUser(): Promise<User>;
    findUserById(user_id: string): Promise<User>;
}

export { IUsersRepository };
