import { BadRequestError } from "../@types/errors/BadRequestError";
import { NextFunction, Request, Response } from "express";
import { Veiculo } from "../models/VeiculoEntity";
import { transformAndValidate } from 'class-transformer-validator'


export const middlewareValidacaoCriacaoVeiculo = async (request: Request, response: Response, next: NextFunction) => {
  const { placa, chassi, renavam, modelo, marca, ano } = request.body;

  if (!placa || !chassi || !renavam || !modelo || !marca || !ano) {
    throw new BadRequestError();
  }

  // transformAndValidate(Veiculo, request.body, { validator: { skipMissingProperties: true } } ).catch((error) => {
  //   throw new BadRequestError(error);
  // });
  
  next();
} 

export const middlewareValidacaoAtualizacaoVeiculo = (request: Request, response: Response, next: NextFunction) => {
  const { placa, chassi, renavam, modelo, marca, ano } = request.body;

  if (placa && (typeof placa !== 'string')) throw new BadRequestError();
  if (chassi && (typeof chassi !== 'string')) throw new BadRequestError();
  if (renavam && (typeof renavam !== 'string')) throw new BadRequestError();
  if (modelo && (typeof modelo !== 'string')) throw new BadRequestError();
  if (marca && (typeof marca !== 'string')) throw new BadRequestError();
  if (ano && (typeof ano !== 'number')) throw new BadRequestError();
  
  next();
}