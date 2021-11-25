import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CatchUrlsFromUserUseCase } from './CatchUrlsFromUserUseCase';

class CatchUrlsFromUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id } = req.body;

        try {
            const catchUrlsFromUserUseCase = container.resolve(
                CatchUrlsFromUserUseCase,
            );

            const codes = await catchUrlsFromUserUseCase.execute({ user_id });

            return res.status(200).json(codes);
        } catch (error) {
            return res.status(404).json({ error: 'User not Found' });
        }
    }
}

export { CatchUrlsFromUserController };
