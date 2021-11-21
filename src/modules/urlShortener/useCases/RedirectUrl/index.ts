import { UsersRepository } from '../../repositories/implementations/usersRepository';
import { RedirectUrlController } from './RedirectUrlController';
import { RedirectUrlUseCase } from './RedirectUrlUseCase';

const usersRepository = UsersRepository.getInstance();

const redirectUrlUseCase = new RedirectUrlUseCase(usersRepository);

const redirectUrlController = new RedirectUrlController(redirectUrlUseCase);

export { redirectUrlController };
