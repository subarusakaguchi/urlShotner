import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateShortenedUrlUseCase } from './CreateShortenedUrlUseCase';

class CreateShortenedUrlController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { url, user_id } = req.body;

        const createShortenedUrlUseCase = container.resolve(
            CreateShortenedUrlUseCase,
        );

        try {
            const code = await createShortenedUrlUseCase.execute({
                url,
                user_id,
            });

            return res.status(201).json({ url_code: code });
        } catch (error) {
            return res.status(404).json({ error: 'User not Found' });
        }
    }
}

export { CreateShortenedUrlController };
