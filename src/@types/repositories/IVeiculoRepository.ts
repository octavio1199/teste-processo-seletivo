import { VeiculoDTOCadastro } from "../../@types/dto/VeiculoDto";
import { Repository } from "typeorm";
import { Veiculo } from "../../models/VeiculoEntity";

export interface IVeiculoRepository extends Repository<Veiculo> {
  cadastrar(veiculoDto: VeiculoDTOCadastro): Promise<Veiculo>;
  listar(): Promise<Veiculo[]>;
  listarPorMarca(marca: string): Promise<Veiculo[]>;
  buscar(id: string): Promise<Veiculo | undefined>;
  buscarPorChassi(chassi: string): Promise<Veiculo | undefined>;
  atualizar(id: string, veiculoDto: Partial<VeiculoDTOCadastro>): Promise<Veiculo>;
  remover(id: string): Promise<void>;
}