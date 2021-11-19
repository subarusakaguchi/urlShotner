import { Url } from '../entities/urls';

interface IUrlsRepositoryDTO {
    url: string;
    code: string;
}

interface IUrlsRepository {
    list(): Url[];
    findUrl(id: string): Url;
    createCode(): string;
    createUrl({ url, code }: IUrlsRepositoryDTO): Url;
    deleteUrl(id: string): void;
}

export { IUrlsRepository, IUrlsRepositoryDTO };
