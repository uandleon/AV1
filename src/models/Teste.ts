import { TipoTeste } from "../enums/TipoTeste";
import { ResultadoTeste } from "../enums/ResultadoTeste";
import { Funcionario } from "./Funcionario";

export class Teste {
  constructor(
    public id: number,
    public tipo: TipoTeste,
    public resultado: ResultadoTeste,
    public responsavel: Funcionario,
    public observacoes: string
  ) {}

  public descrever(): string {
    return `Teste ${this.tipo} (${this.resultado}) por ${this.responsavel.nome}`;
  }
}
