import { v4 as uuidv4 } from 'uuid';

class Url {
    id?: string;
    code: string;
    original_url: string;
    created_At: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Url };
