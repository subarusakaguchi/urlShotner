import Router from 'express';

import { createShortenedUrlController } from '../modules/urlShortener/useCases/CreateShortenedUrl';

const shortenerRoute = Router();

shortenerRoute.post('/', (req, res) => {
    return createShortenedUrlController.handle(req, res);
});

export { shortenerRoute };
