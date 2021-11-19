import { Url } from 'modules/urlShortener/entities/urls';

import { IUrlsRepository } from '../../repositories/IUrlsRepository';

class ListUrlsUseCase {
    constructor(private urlsRepository: IUrlsRepository) {}
    execute(): Url[] {
        const allUrls = this.urlsRepository.list();

        return allUrls;
    }
}

export { ListUrlsUseCase };
