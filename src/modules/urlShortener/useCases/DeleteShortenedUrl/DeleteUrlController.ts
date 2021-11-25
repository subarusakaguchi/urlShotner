import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUrlUseCase } from './DeleteUrlUseCase';

class DeleteUrlController {
    async handle(req: Request, res: Response): Promise<Response> {
        const deleteUrlUseCase = container.resolve(DeleteUrlUseCase);

        try {
            const { code, user_id } = req.body;

            await deleteUrlUseCase.execute({ code, user_id });
        } catch (error) {
            return res.status(404).json({ error: 'User or Url not found' });
        }

        return res.status(200).json({ message: 'Successfully deleted' });
    }
}

export { DeleteUrlController };
