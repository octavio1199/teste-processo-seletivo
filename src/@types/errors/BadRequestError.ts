import { ValidationError } from 'class-validator';
import { BaseError } from './BaseError'

/***
 * Classe que implementa a abstração dos erros de entidade não encontrada. Esta deverá ser respondida
 * como um código HTTP 400.
 */
export class BadRequestError extends Error implements BaseError {
  public name: string;
  public httpStatus: number;

  constructor(message = '') {
    super(message);
    this.name = 'BadRequestError';
    this.httpStatus = 400;
  }
}

