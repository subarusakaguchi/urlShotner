import { UrlsRepository } from '../../repositories/implementations/urlsRepository';
import { CreateShortenedUrlController } from './CreateShortenedUrlController';
import { CreateShortenedUrlUseCase } from './CreateShortenedUrlUseCase';

const urlsRepository = UrlsRepository.getInstance();

const createShortenedUrlUseCase = new CreateShortenedUrlUseCase(urlsRepository);

const createShortenedUrlController = new CreateShortenedUrlController(
    createShortenedUrlUseCase,
);

export { createShortenedUrlController };
