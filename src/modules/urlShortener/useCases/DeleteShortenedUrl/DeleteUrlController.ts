import { Request, Response } from 'express';

import { DeleteUrlUseCase } from './DeleteUrlUseCase';

class DeleteUrlController {
    constructor(private deleteUrlUseCase: DeleteUrlUseCase) {}
    handle(req: Request, res: Response): Response {
        try {
            const { code, user_id } = req.body;

            this.deleteUrlUseCase.execute({ code, user_id });
        } catch (error) {
            return res.status(404).json({ error: 'User or Url not found' });
        }

        return res.status(200).json({ message: 'Successfully deleted' });
    }
}

export { DeleteUrlController };
