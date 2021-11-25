import Router from 'express';

import { RedirectUrlController } from '../modules/urlShortener/useCases/RedirectUrl/RedirectUrlController';

const redirectRoute = Router();

const redirectUrlController = new RedirectUrlController();

redirectRoute.get('/:code', redirectUrlController.handle);

export { redirectRoute };
