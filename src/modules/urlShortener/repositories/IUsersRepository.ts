import { Url } from '../entities/urls';
import { User } from '../entities/users';

interface IUsersRepositoryDTO {
    url: string;
    user_id: string;
}

interface IUsersRepository {
    list(): User[];
    createUser(): User;
    findUrlByCode(code: string): Url;
    findUserById(user_id: string): User;
    verifyCode(code: string): boolean;
    createCode(): string;
    createUrl({ url, user_id }: IUsersRepositoryDTO): Url;
    deleteUrl(code: string, user_id: string): void;
}

export { IUsersRepository, IUsersRepositoryDTO };
