import { Url } from '../entities/urls';
import { User } from '../entities/users';

interface IUrlsRepositoryDTO {
    url: string;
    user_id: string;
    user: User;
}

interface IUrlsRepository {
    findUrlByCode(code: string): Promise<Url>;
    verifyCode(code: string): Promise<boolean>;
    createCode(): Promise<string>;
    createUrl({ url, user_id }: IUrlsRepositoryDTO): Promise<Url>;
    deleteUrl(code: string, user_id: string): Promise<void>;
}

export { IUrlsRepository, IUrlsRepositoryDTO };
