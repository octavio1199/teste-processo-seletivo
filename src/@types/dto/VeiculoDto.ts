import { Veiculo } from "../../models/VeiculoEntity";

export interface VeiculoDTOCadastro {
  placa: string;
  chassi: string;
  renavam: string;
  modelo: string;
  marca: string;
  ano: number;
}