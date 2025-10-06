import { NivelPermissao } from "../enums/NivelPermissao";

export class Funcionario {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public senha: string,
    public permissao: NivelPermissao
  ) {}

  public descrever(): string {
    return `ID: ${this.id}, Nome: ${this.nome}, Permissão: ${this.permissao}`;
  }
}
