import { UrlsRepository } from '../../repositories/implementations/urlsRepository';
import { ListUrlsController } from './ListUrlsControllers';
import { ListUrlsUseCase } from './ListUrlsUseCase';

const urlsRepository = UrlsRepository.getInstance();

const listUrlsUseCase = new ListUrlsUseCase(urlsRepository);

const listUrlsController = new ListUrlsController(listUrlsUseCase);

export { listUrlsController };
