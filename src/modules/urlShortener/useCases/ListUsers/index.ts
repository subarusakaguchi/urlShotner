import { UsersRepository } from '../../repositories/implementations/usersRepository';
import { ListUsersController } from './ListUsersControllers';
import { ListUsersUseCase } from './ListUsersUseCase';

const usersRepository = UsersRepository.getInstance();

const listUsersUseCase = new ListUsersUseCase(usersRepository);

const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };
