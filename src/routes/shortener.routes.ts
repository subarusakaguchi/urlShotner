import Router from 'express';

import { createShortenedUrlController } from '../modules/urlShortener/useCases/CreateShortenedUrl';
import { listUrlsController } from '../modules/urlShortener/useCases/ListUrls';

const shortenerRoute = Router();

shortenerRoute.get('/', (req, res) => {
    return listUrlsController.handle(req, res);
});

shortenerRoute.post('/', (req, res) => {
    return createShortenedUrlController.handle(req, res);
});

export { shortenerRoute };
