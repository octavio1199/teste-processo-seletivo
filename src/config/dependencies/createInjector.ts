import { getCustomRepository } from "typeorm";
import Container from 'typedi'
import { VeiculoRepository } from "../../repositories/VeiculoRepository";

// inicializador de dependências:
// inicializa controllers
import '../../controllers/VeiculoController'

// inicializa services
import '../../services/VeiculoService'

// inicializa clientes
import '../../infra/http/AxiosHttpClient';

const createDependencyInjector = () => {
  Container.set('VeiculoRepository', getCustomRepository(VeiculoRepository));
}

export default createDependencyInjector;