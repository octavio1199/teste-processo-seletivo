import * as express from 'express';

import createVeiculoRouter from './veiculoRouter';

const createRouters = (app: express.Express) => {
  app.use('/veiculos', createVeiculoRouter());
}

export default createRouters;