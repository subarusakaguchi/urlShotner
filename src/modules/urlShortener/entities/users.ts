import { CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { Url } from './urls';

@Entity('users')
class User {
    @PrimaryColumn()
    id?: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(type => Url, user => User)
    links?: Url[];

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { User };
