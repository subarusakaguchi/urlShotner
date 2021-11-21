import { UsersRepository } from '../../repositories/implementations/usersRepository';
import { CreateShortenedUrlController } from './CreateShortenedUrlController';
import { CreateShortenedUrlUseCase } from './CreateShortenedUrlUseCase';

const usersRepository = UsersRepository.getInstance();

const createShortenedUrlUseCase = new CreateShortenedUrlUseCase(
    usersRepository,
);

const createShortenedUrlController = new CreateShortenedUrlController(
    createShortenedUrlUseCase,
);

export { createShortenedUrlController };
