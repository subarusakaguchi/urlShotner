import 'reflect-metadata';
import './database';
import './shared/container';
import express from 'express';
import path from 'path';

import { routes } from './routes';

const app = express();
const PORT = 5555;

const publicDir = path.join(__dirname, './public');
app.use(express.static(publicDir));

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is Running on port: ${PORT}`);
});
