import { UnprocessableEntityError } from "./UnprocessableEntityError";

export class ChassiJaCadastrado extends UnprocessableEntityError {
  public name: string;
  constructor() {
    super('Veiculo já cadastrado no sistema');
    this.name = 'ChassiJaCadastrado';
  }
}
