import { Request, Response } from 'express';
import { Url } from 'modules/urlShortener/entities/urls';

import { RedirectUrlUseCase } from './RedirectUrlUseCase';

class RedirectUrlController {
    constructor(private redirectUrlUseCase: RedirectUrlUseCase) {}
    handle(req: Request, res: Response): void {
        const { code } = req.params;

        const url: Url = this.redirectUrlUseCase.execute({ code });

        const link: string = url.original_url.toString();

        return res.redirect(link);
    }
}

export { RedirectUrlController };
