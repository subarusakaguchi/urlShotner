import { UrlsRepository } from '../../repositories/implementations/urlsRepository';
import { RedirectUrlController } from './RedirectUrlController';
import { RedirectUrlUseCase } from './RedirectUrlUseCase';

const urlsRepository = UrlsRepository.getInstance();

const redirectUrlUseCase = new RedirectUrlUseCase(urlsRepository);

const redirectUrlController = new RedirectUrlController(redirectUrlUseCase);

export { redirectUrlController };
