import { Url } from '../../entities/urls';
import { IUrlsRepository } from '../../repositories/IUrlsRepository';

interface IRequest {
    code: string;
}

class RedirectUrlUseCase {
    constructor(private urlsRepository: IUrlsRepository) {}
    execute({ code }: IRequest): Url {
        const url = this.urlsRepository.findUrlByCode(code);

        return url;
    }
}

export { RedirectUrlUseCase };
