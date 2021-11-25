import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { User } from './users';

@Entity('urls')
class Url {
    @PrimaryColumn()
    id?: string;
    @Column()
    code: string;
    @Column()
    original_url: string;
    @CreateDateColumn()
    created_At: Date;
    @ManyToOne(type => User, links => Url)
    user: User;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Url };
