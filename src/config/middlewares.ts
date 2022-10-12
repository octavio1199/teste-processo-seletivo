import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import morgan from 'morgan';
import { serve, setup } from 'swagger-ui-express';
import YAML from 'yamljs';

const createMiddlewares = (app: express.Express) => {
  app.use(cors());
  app.use(json({ limit: '5mb' }));
  app.use(morgan('dev'));
  // Usa o Swagger (descomentar depois que o Swagger estiver pronto)
  app.use(
    '/docs',
    serve,
    setup(
      // lê o conteúdo a partir do root do projeto
      YAML.load('src/config/swagger.yaml')
    )
  );
};

export default createMiddlewares;
