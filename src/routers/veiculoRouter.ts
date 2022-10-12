import { VeiculoController } from "../controllers/VeiculoController";
import Container from "typedi";
import { Router } from "express";
import { errorHandlerWrapper } from "../middlewares/errorHandlers";
import { middlewareValidacaoAtualizacaoVeiculo, middlewareValidacaoCriacaoVeiculo } from "../middlewares/validacaoVeiculo";

const router = Router();

const getController = (): VeiculoController => {
  return Container.get<VeiculoController>('VeiculoController');
}

const createRouter = () => {
  const controller = getController();

  router.post('/',
  middlewareValidacaoCriacaoVeiculo, 
  errorHandlerWrapper((req, res) => controller.cadastrar(req, res)));

  router.get('/', 
  errorHandlerWrapper((req, res) => controller.listar(req, res)));

  router.get('/:id', 
  errorHandlerWrapper((req, res) => controller.buscar(req, res)));

  router.get('/marcas/:marca', 
  errorHandlerWrapper((req, res) => controller.listarPorMarca(req, res)));

  router.patch('/:id',
  middlewareValidacaoAtualizacaoVeiculo, 
  errorHandlerWrapper((req, res) => controller.atualizar(req, res)));

  router.delete('/:id', 
  errorHandlerWrapper((req, res) => controller.remover(req, res)));

  return router;
}

export default createRouter;