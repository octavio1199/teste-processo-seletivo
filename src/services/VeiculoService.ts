import { Inject, Service } from "typedi";
import { IVeiculoService } from "../@types/services/IVeiculoService";
import { IVeiculoRepository } from "../@types/repositories/IVeiculoRepository";
import { VeiculoDTOCadastro } from "../@types/dto/VeiculoDto";
import { Veiculo } from "../models/VeiculoEntity";
import { NotFoundError } from "../@types/errors/NotFoundError";
import { ChassiJaCadastrado } from "../@types/errors/ChassiJaCadastrado";
import { plainToInstance } from "class-transformer";

@Service('VeiculoService')
export class VeiculoService implements IVeiculoService {
  constructor( @Inject('VeiculoRepository') private readonly veiculoRepository: IVeiculoRepository) {}
  
  async cadastrar(veiculo: VeiculoDTOCadastro): Promise<Veiculo> {
    const veiculoCadastrado = await this.veiculoRepository.buscarPorChassi(veiculo.chassi);
    if(veiculoCadastrado){
      throw new ChassiJaCadastrado();
    }
    return await this.veiculoRepository.cadastrar(veiculo);
  }
  
  async listar(): Promise<Veiculo[]> {
    const veiculos = await this.veiculoRepository.listar();
    return await this.veiculoRepository.listar();
  }
  
  async listarPorMarca(marca: string): Promise<Veiculo[]> {
    return await this.veiculoRepository.listarPorMarca(marca);
  }
  
  async buscar(id: string): Promise<Veiculo> {
    const veiculoProcurado = await this.veiculoRepository.buscar(id);
    if (!veiculoProcurado) {
      throw new NotFoundError();
    }
    return veiculoProcurado;
  }

  async atualizar(id: string, veiculo: Partial<VeiculoDTOCadastro>): Promise<Veiculo> {
    const veiculoProcurado = await this.veiculoRepository.buscar(id);
    if (!veiculoProcurado) {
      throw new NotFoundError();
    }
    return await this.veiculoRepository.atualizar(id, veiculo);
  }

  async remover(id: string): Promise<void> {
    const veiculoProcurado = await this.veiculoRepository.buscar(id);
    if (!veiculoProcurado) {
      throw new NotFoundError();
    }
    return await this.veiculoRepository.remover(id);
  }
}