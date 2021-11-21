import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}
    handle(req: Request, res: Response): Response {
        const user = this.createUserUseCase.execute();

        return res.status(201).json(user);
    }
}

export { CreateUserController };
