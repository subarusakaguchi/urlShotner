import { Request, Response } from 'express';

import { ListUrlsUseCase } from './ListUrlsUseCase';

class ListUrlsController {
    constructor(private listUrlsUseCase: ListUrlsUseCase) {}
    handle(req: Request, res: Response): Response {
        const allUrls = this.listUrlsUseCase.execute();

        return res.status(200).json(allUrls);
    }
}

export { ListUrlsController };
