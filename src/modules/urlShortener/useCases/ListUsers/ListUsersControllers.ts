import { Request, Response } from 'express';

import { ListUsersUseCase } from './ListUsersUseCase';

class ListUsersController {
    constructor(private listUsersUseCase: ListUsersUseCase) {}
    handle(req: Request, res: Response): Response {
        const allUrls = this.listUsersUseCase.execute();

        return res.status(200).json(allUrls);
    }
}

export { ListUsersController };
