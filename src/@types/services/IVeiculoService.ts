import { VeiculoDTOCadastro } from "../dto/VeiculoDto";
import { Veiculo } from "../../models/VeiculoEntity";

export interface IVeiculoService {
  cadastrar(veiculo: VeiculoDTOCadastro): Promise<Veiculo>;
  listar(): Promise<Veiculo[]>;
  listarPorMarca(marca: string): Promise<Veiculo[]>;
  buscar(id: string): Promise<Veiculo>;
  atualizar(id: string, veiculo: Partial<VeiculoDTOCadastro>): Promise<Veiculo>;
  remover(id: string): Promise<void>;
}