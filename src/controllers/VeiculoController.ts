import { IVeiculoService } from "../@types/services/IVeiculoService";
import { Inject, Service } from "typedi";
import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

@Service('VeiculoController')
export class VeiculoController {
  constructor( @Inject('VeiculoService') private readonly veiculoService: IVeiculoService) {} 

  async cadastrar(request: Request, response: Response) {
    const veiculo = await this.veiculoService.cadastrar(request.body);
    response.status(201).send(veiculo);
  }

  async listar(request: Request, response: Response) {
    const veiculos = await this.veiculoService.listar();
    response.status(200).send(veiculos);
  }

  async listarPorMarca(request: Request, response: Response) {
    const { marca } = request.params;
    const veiculos = await this.veiculoService.listarPorMarca(marca);
    response.status(200).send(veiculos);
  }

  async buscar(request: Request, response: Response) {
    const { id } = request.params;
    const veiculo = await this.veiculoService.buscar(id);
    response.status(200).send(veiculo);
  }

  async atualizar(request: Request, response: Response) {
    const { id } = request.params;
    const veiculo = await this.veiculoService.atualizar(id, request.body);
    response.status(200).send(veiculo);
  }

  async remover(request: Request, response: Response) {
    const { id } = request.params;
    await this.veiculoService.remover(id);
    response.status(StatusCodes.OK).send(ReasonPhrases.OK);
  }
}