import Router from 'express';

import { createShortenedUrlController } from '../modules/urlShortener/useCases/CreateShortenedUrl';
import { deleteUrlController } from '../modules/urlShortener/useCases/DeleteShortenedUrl';

const shortenerRoute = Router();

shortenerRoute.post('/', (req, res) => {
    return createShortenedUrlController.handle(req, res);
});

shortenerRoute.delete('/', (req, res) => {
    return deleteUrlController.handle(req, res);
});

export { shortenerRoute };
