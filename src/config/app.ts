import express from 'express';
import createRouters from '../routers';
import createMiddlewares from './middlewares';
import { errorHandlers } from '../middlewares/errorHandlers';

const createApp = (): express.Express => {
  const app = express();

  createMiddlewares(app);
  createRouters(app);
  errorHandlers(app);

  return app;
};

export default createApp;
