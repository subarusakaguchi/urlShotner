import { Url } from '../../entities/urls';
import { IUrlsRepository, IUrlsRepositoryDTO } from '../IUrlsRepository';

class UrlsRepository implements IUrlsRepository {
    private urls: Url[];

    private static INSTANCE: UrlsRepository;

    constructor() {
        this.urls = [];
    }
    findUrlByCode(code: string): Url {
        const url = this.urls.find(url => url.code === code);

        return url;
    }
    createCode(): string {
        return 'iahbdbdibf';
    }
    createUrl({ url, code }: IUrlsRepositoryDTO): Url {
        const newUrl = new Url();

        Object.assign(newUrl, {
            original_url: url,
            code,
            created_at: new Date(),
        });

        this.urls.push(newUrl);

        return newUrl;
    }
    deleteUrl(code: string): void {
        throw new Error('Method not implemented.');
    }
    list(): Url[] {
        return this.urls;
    }

    public static getInstance() {
        if (!UrlsRepository.INSTANCE) {
            UrlsRepository.INSTANCE = new UrlsRepository();
        }

        return UrlsRepository.INSTANCE;
    }
}

export { UrlsRepository };
