import "reflect-metadata";
import * as dotenv from 'dotenv';
dotenv.config();

import createApp from './config/app';
import createDatabaseConnection from "./config/database/connect";
import createDependencyInjector from "./config/dependencies/createInjector";
import createServer from "./infra/server/server";
import { createConnection } from "typeorm";

export const start = async () => {
  try {
    await createDatabaseConnection();
    createDependencyInjector();
    const app = createApp();

    createServer(app);
    // return app;
  } catch (error) {
    console.error('Fatal error: ', error);
  }
};
start();

// const init = () => createConnection().then( async () => {
//   createDependencyInjector();
//   const app = createApp();
//   createServer(app);
//   return app;
// }).catch(error => console.log(error));

// export default init;
// init();

