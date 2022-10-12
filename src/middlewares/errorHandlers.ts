import * as express from 'express';
import { BaseError } from '../@types/errors/BaseError';
import { BadRequestError } from '../@types/errors/BadRequestError';
import { NotFoundError } from '../@types/errors/NotFoundError';
import { UnprocessableEntityError } from '../@types/errors/UnprocessableEntityError';

const handledHttpStatusErrors = [
  BadRequestError,
  NotFoundError,
  UnprocessableEntityError
];

const isErrorHandled = (error: BaseError) => {
  return handledHttpStatusErrors.some(erorrClass => error instanceof erorrClass);
}

export const errorHandlers = (app: express.Express) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((error: BaseError, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (isErrorHandled(error)) {
      return res.status(error.httpStatus).json({ error });
    }

    res.status(500).json({ error: error.message });
  })
}

export const errorHandlerWrapper = (handler: express.RequestHandler) =>
  async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      Promise.resolve(handler(req, res, next)).catch(next);
    } catch (error) {
      next(error)
    }
  }
