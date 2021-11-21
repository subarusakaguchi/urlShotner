import { IUrlsRepository } from '../../repositories/IUrlsRepository';

interface IRequest {
    url: string;
    user_id: string;
}

class CreateShortenedUrlUseCase {
    constructor(private urlsRepository: IUrlsRepository) {}
    execute({ url, user_id }: IRequest): string {
        const code = this.urlsRepository.createCode();

        const newUrl = this.urlsRepository.createUrl({ url, code, user_id });

        return newUrl.code;
    }
}

export { CreateShortenedUrlUseCase };
