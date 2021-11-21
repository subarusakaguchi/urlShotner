import 'reflect-metadata';
import './database';
import express from 'express';

import { redirectRoute } from './routes/redirect.routes';
import { shortenerRoute } from './routes/shortener.routes';
import { userRouter } from './routes/users.routes';

const app = express();
const PORT = 5555;

app.use(express.json());
app.use('/users', userRouter);
app.use('/short', shortenerRoute);
app.use('/', redirectRoute);

app.listen(PORT, () => {
    console.log(`Server is Running on port: ${PORT}`);
});
