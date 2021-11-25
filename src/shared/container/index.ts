import { container } from 'tsyringe';

import { UrlsRepository } from '../../modules/urlShortener/repositories/implementations/urlsRepository';
import { UsersRepository } from '../../modules/urlShortener/repositories/implementations/usersRepository';
import { IUrlsRepository } from '../../modules/urlShortener/repositories/IUrlsRepository';
import { IUsersRepository } from '../../modules/urlShortener/repositories/IUsersRepository';

container.registerSingleton<IUsersRepository>(
    'UsersRepository',
    UsersRepository,
);

container.registerSingleton<IUrlsRepository>('UrlsRepository', UrlsRepository);
