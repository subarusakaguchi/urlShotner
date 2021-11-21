import Router from 'express';

import { createUserController } from '../modules/urlShortener/useCases/CreateUser';
import { listUsersController } from '../modules/urlShortener/useCases/ListUsers';

const userRouter = Router();

userRouter.post('/', (req, res) => {
    return createUserController.handle(req, res);
});

userRouter.get('/all', (req, res) => {
    return listUsersController.handle(req, res);
});

export { userRouter };
