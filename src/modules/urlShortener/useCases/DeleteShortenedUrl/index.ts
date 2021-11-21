import { UsersRepository } from '../../repositories/implementations/usersRepository';
import { DeleteUrlController } from './DeleteUrlController';
import { DeleteUrlUseCase } from './DeleteUrlUseCase';

const usersRepository = UsersRepository.getInstance();

const deleteUrlUseCase = new DeleteUrlUseCase(usersRepository);

const deleteUrlController = new DeleteUrlController(deleteUrlUseCase);

export { deleteUrlController };
