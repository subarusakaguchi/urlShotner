import { Url } from '../entities/urls';

interface IUrlsRepositoryDTO {
    url: string;
    code: string;
}

interface IUrlsRepository {
    list(): Url[];
    findUrlByCode(code: string): Url;
    createCode(): string;
    createUrl({ url, code }: IUrlsRepositoryDTO): Url;
    deleteUrl(code: string): void;
}

export { IUrlsRepository, IUrlsRepositoryDTO };
