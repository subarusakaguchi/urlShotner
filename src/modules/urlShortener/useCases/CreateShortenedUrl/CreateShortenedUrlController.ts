import { Request, Response } from 'express';

import { CreateShortenedUrlUseCase } from './CreateShortenedUrlUseCase';

class CreateShortenedUrlController {
    constructor(private createShortenedUrlUseCase: CreateShortenedUrlUseCase) {}
    handle(req: Request, res: Response): Response {
        const { url, user_id } = req.body;

        try {
            const code = this.createShortenedUrlUseCase.execute({
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
