import { Url } from '../../entities/urls';
import { User } from '../../entities/users';
import { IUsersRepository, IUsersRepositoryDTO } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
    private users: User[];

    private static INSTANCE: UsersRepository;

    constructor() {
        this.users = [];
    }

    createUser(): User {
        const newUser = new User();

        Object.assign(newUser, {
            created_at: new Date(),
        });

        this.users.push(newUser);

        return newUser;
    }

    findUrlByCode(code: string): Url {
        let url: Url;

        this.users.every(user => {
            url = user.links.find(link => link.code === code);
            if (url) {
                return false;
            }
            return true;
        });

        console.log(url);

        return url;
    }

    createCode(): string {
        let code = '';

        let verify = this.verifyCode(code);

        while (verify) {
            code = '';
            for (let j = 0; j < 9; j++) {
                let symbol = Math.random().toString(36).slice(2, 3);
                if (symbol.match(/[a-z]/i)) {
                    const random = Math.floor(Math.random() * 10);
                    if (random % 2 === 0) {
                        symbol = symbol.toUpperCase();
                    }
                }
                code += symbol;
            }

            verify = this.verifyCode(code);
        }

        return code;
    }

    findUserById(user_id: string): User {
        const user = this.users.find(user => user.id === user_id);

        return user;
    }

    verifyCode(code: string): boolean {
        const url = this.findUrlByCode(code);

        if (url || code === '') {
            return true;
        }

        return false;
    }

    createUrl({ url, user_id }: IUsersRepositoryDTO): Url {
        const user = this.findUserById(user_id);

        const newUrl = new Url();

        Object.assign(newUrl, {
            original_url: url,
            code: this.createCode(),
            created_at: new Date(),
        });

        user.links.push(newUrl);

        return newUrl;
    }

    deleteUrl(code: string, user_id: string): void {
        const user = this.findUserById(user_id);

        user.links = user.links.filter(link => link.code !== code);
    }

    list(): User[] {
        return this.users;
    }

    public static getInstance() {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }
}

export { UsersRepository };
