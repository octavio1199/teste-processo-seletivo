import { EntityRepository, Repository } from "typeorm";
import { Veiculo } from "../models/VeiculoEntity";
import { IVeiculoRepository } from "../@types/repositories/IVeiculoRepository";
import { VeiculoDTOCadastro } from "../@types/dto/VeiculoDto";
import { plainToInstance } from "class-transformer";

@EntityRepository(Veiculo)
export class VeiculoRepository extends Repository<Veiculo> implements IVeiculoRepository {

  async cadastrar(veiculoDto: VeiculoDTOCadastro): Promise<Veiculo> {
    const veiculo = plainToInstance(Veiculo, {
      placa: veiculoDto.placa,
      chassi: veiculoDto.chassi,
      renavam: veiculoDto.renavam,
      marca: veiculoDto.marca,
      modelo: veiculoDto.modelo,
      ano: veiculoDto.ano,
    });
    console.log('cheguei ' + (veiculo))
    const veiculoSalvo = await this.save(veiculo);
    console.log('cheguei ' + veiculoSalvo)
    return veiculoSalvo;
  }

  async listar(): Promise<Veiculo[]> {
    return await this.find();
  }
 
  async listarPorMarca(marca: string): Promise<Veiculo[]> {
    return await this.find({ where: { marca } });
  }

  async buscar(id: string): Promise<Veiculo | undefined> {
    return await this.findOne(id);
  }

  async buscarPorChassi(chassi: string): Promise<Veiculo | undefined> {
    return await this.findOne({ where: { chassi } });
  }

  async atualizar(id: string, veiculo: Partial<VeiculoDTOCadastro>): Promise<Veiculo> {
    return await this.save({ id, ...veiculo });
  }
  
  async remover(id: string): Promise<void> {
    this.softDelete(id);
  }
  
}