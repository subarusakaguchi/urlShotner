import { UsersRepository } from '../../repositories/implementations/usersRepository';
import { CreateUserController } from './CreateUserControllert';
import { CreateUserUseCase } from './CreateUserUseCase';

const usersRepository = UsersRepository.getInstance();

const createUserUseCase = new CreateUserUseCase(usersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
