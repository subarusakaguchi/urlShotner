import { Url } from '../entities/urls';

interface IUrlsRepositoryDTO {
    url: string;
    code: string;
    user_id: string;
}

interface IUrlsRepository {
    list(): Url[];
    createUserId(): string;
    findUrlByCode(code: string): Url;
    verifyCode(code: string): boolean;
    createCode(): string;
    createUrl({ url, code, user_id }: IUrlsRepositoryDTO): Url;
    deleteUrl(code: string): void;
}

export { IUrlsRepository, IUrlsRepositoryDTO };
