import { Url } from '../../entities/urls';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
    code: string;
}

class RedirectUrlUseCase {
    constructor(private usersRepository: IUsersRepository) {}
    execute({ code }: IRequest): Url {
        const url = this.usersRepository.findUrlByCode(code);

        return url;
    }
}

export { RedirectUrlUseCase };
