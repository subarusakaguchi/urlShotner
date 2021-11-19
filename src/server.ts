import express from 'express';

import { redirectRoute } from './routes/redirect.routes';
import { shortenerRoute } from './routes/shortener.routes';

const app = express();
const PORT = 5555;

app.use('/', redirectRoute);
app.use(express.json());
app.use('/short', shortenerRoute);

app.listen(PORT, () => {
    console.log(`Server is Running on port: ${PORT}`);
});