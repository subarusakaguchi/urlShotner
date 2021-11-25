import { Router } from 'express';

import { publicRoute } from './public.routes';
import { redirectRoute } from './redirect.routes';
import { shortenerRoute } from './shortener.routes';
import { userRouter } from './users.routes';

const routes = Router();

routes.use('/home', publicRoute);
routes.use('/users', userRouter);
routes.use('/short', shortenerRoute);
routes.use('/', redirectRoute);

export { routes };
