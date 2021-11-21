import { Url } from '../../entities/urls';
import { IUrlsRepository } from '../../repositories/IUrlsRepository';

interface IRequest {
    url: string;
}

class CreateShortenedUrlUseCase {
    constructor(private urlsRepository: IUrlsRepository) {}
    execute({ url }: IRequest): string {
        const code = this.urlsRepository.createCode();

        const newUrl = this.urlsRepository.createUrl({ url, code });

        return newUrl.code;
    }
}

export { CreateShortenedUrlUseCase };
