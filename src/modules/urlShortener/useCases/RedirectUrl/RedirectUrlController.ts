import { Request, Response } from 'express';
import { Url } from 'modules/urlShortener/entities/urls';
import { container } from 'tsyringe';

import { RedirectUrlUseCase } from './RedirectUrlUseCase';

class RedirectUrlController {
    async handle(req: Request, res: Response): Promise<void> {
        const { code } = req.params;

        const redirectUrlUseCase = container.resolve(RedirectUrlUseCase);

        const url: Url = await redirectUrlUseCase.execute({ code });

        const link: string = url.original_url.toString();

        return res.redirect(link);
    }
}

export { RedirectUrlController };
