import Router from 'express';

import { CreateShortenedUrlController } from '../modules/urlShortener/useCases/CreateShortenedUrl/CreateShortenedUrlController';
import { DeleteUrlController } from '../modules/urlShortener/useCases/DeleteShortenedUrl/DeleteUrlController';

const shortenerRoute = Router();

const createShortenedUrlController = new CreateShortenedUrlController();
const deleteUrlController = new DeleteUrlController();

shortenerRoute.post('/', createShortenedUrlController.handle);

shortenerRoute.delete('/', deleteUrlController.handle);

export { shortenerRoute };
