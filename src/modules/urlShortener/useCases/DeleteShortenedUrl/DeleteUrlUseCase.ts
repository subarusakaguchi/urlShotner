import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    code: string;
    user_id: string;
}

class DeleteUrlUseCase {
    constructor(private usersRepository: IUsersRepository) {}
    execute({ code, user_id }: IRequest) {
        const user = this.usersRepository.findUserById(user_id);

        if (!user) {
            throw new Error('User not found');
        }

        const url = this.usersRepository.findUrlByCode(code);

        if (!url) {
            throw new Error('Url not found');
        }

        this.usersRepository.deleteUrl(code, user_id);
    }
}

export { DeleteUrlUseCase };
