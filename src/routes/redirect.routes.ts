import Router from 'express';

import { redirectUrlController } from '../modules/urlShortener/useCases/RedirectUrl';

const redirectRoute = Router();

redirectRoute.get('/:code', (req, res) => {
    return redirectUrlController.handle(req, res);
});

export { redirectRoute };
