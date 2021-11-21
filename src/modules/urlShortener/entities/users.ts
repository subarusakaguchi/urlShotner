import { v4 as uuidv4 } from 'uuid';

import { Url } from './urls';

class User {
    id?: string;
    created_at: Date;
    links?: Url[];

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
            this.links = [];
        }
    }
}

export { User };
