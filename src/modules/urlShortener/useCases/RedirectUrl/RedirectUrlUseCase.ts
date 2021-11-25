import { inject, injectable } from 'tsyringe';

import { Url } from '../../entities/urls';
import { IUrlsRepository } from '../../repositories/IUrlsRepository';

interface IRequest {
    code: string;
}

@injectable()
class RedirectUrlUseCase {
    constructor(
        @inject('UrlsRepository')
        private urlsRepository: IUrlsRepository,
    ) {}
    async execute({ code }: IRequest): Promise<Url> {
        const url = await this.urlsRepository.findUrlByCode(code);

        return url;
    }
}

export { RedirectUrlUseCase };
