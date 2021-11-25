import Router from 'express';

const publicRoute = Router();

publicRoute.get('/', (req, res) => res.render('index'));

export { publicRoute };
