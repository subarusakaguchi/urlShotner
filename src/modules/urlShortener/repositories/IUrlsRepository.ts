import { Url } from '../entities/urls';
import { User } from '../entities/users';

interface IUrlsRepositoryDTO {
    url: string;
    user: User;
}

interface IUrlsRepository {
    catchAllUrlsFromUser(user: User): Promise<Url[]>;
    findUrlByCode(code: string): Promise<Url>;
    verifyCode(code: string): Promise<boolean>;
    createCode(): Promise<string>;
    createUrl({ url, user }: IUrlsRepositoryDTO): Promise<Url>;
    deleteUrl(code: string): Promise<void>;
}

export { IUrlsRepository, IUrlsRepositoryDTO };
