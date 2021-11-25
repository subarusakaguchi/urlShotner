import Router from 'express';

import { CreateUserController } from '../modules/urlShortener/useCases/CreateUser/CreateUserControllert';
import { ListUsersController } from '../modules/urlShortener/useCases/ListUsers/ListUsersControllers';

const userRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

userRouter.post('/', createUserController.handle);

userRouter.get('/all', listUsersController.handle);

export { userRouter };
