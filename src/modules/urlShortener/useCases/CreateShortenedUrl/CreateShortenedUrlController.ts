import { Request, Response } from 'express';

import { CreateShortenedUrlUseCase } from './CreateShortenedUrlUseCase';

class CreateShortenedUrlController {
    constructor(private createShortenedUrlUseCase: CreateShortenedUrlUseCase) {}
    handle(req: Request, res: Response): Response {
        const { url } = req.body;

        const code = this.createShortenedUrlUseCase.execute({ url });

        return res.status(201).json({ url_code: code });
    }
}

export { CreateShortenedUrlController };
