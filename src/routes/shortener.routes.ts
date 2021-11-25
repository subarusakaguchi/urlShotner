import Router from 'express';

import { CatchUrlsFromUserController } from '../modules/urlShortener/useCases/CacthUrlsFromUser/CatchUrlsFromUserController';
import { CreateShortenedUrlController } from '../modules/urlShortener/useCases/CreateShortenedUrl/CreateShortenedUrlController';
import { DeleteUrlController } from '../modules/urlShortener/useCases/DeleteShortenedUrl/DeleteUrlController';

const shortenerRoute = Router();

const catchUrlsFromUserController = new CatchUrlsFromUserController();
const createShortenedUrlController = new CreateShortenedUrlController();
const deleteUrlController = new DeleteUrlController();

shortenerRoute.get('/', catchUrlsFromUserController.handle);

shortenerRoute.post('/', createShortenedUrlController.handle);

shortenerRoute.delete('/', deleteUrlController.handle);

export { shortenerRoute };
