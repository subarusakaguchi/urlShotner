import { Url } from '../entities/urls';

interface IUrlsRepositoryDTO {
    url: string;
    user_id: string;
}

interface IUrlsRepository {
    findUrlByCode(code: string): Promise<Url>;
    verifyCode(code: string): Promise<boolean>;
    createCode(): Promise<string>;
    createUrl({ url, user_id }: IUrlsRepositoryDTO): Promise<Url>;
    deleteUrl(code: string, user_id: string): Promise<void>;
}

export { IUrlsRepository, IUrlsRepositoryDTO };
