// src/models/Etapa.ts
import { Funcionario } from "./Funcionario";
import { StatusEtapa } from "../enums/StatusEtapa";
import { ResultadoTeste } from "../enums/ResultadoTeste";

export class Etapa {
  private funcionarios: Funcionario[] = [];
  private resultadoTeste?: ResultadoTeste;

  constructor(
    public id: number,
    public nome: string,
    public aeronaveId: number,
    public descricao: string = "",
    public status: StatusEtapa = StatusEtapa.PENDENTE
  ) {}

  public adicionarFuncionario(func: Funcionario): void {
    this.funcionarios.push(func);
  }

  public iniciar(): void {
    this.status = StatusEtapa.ANDAMENTO;
  }

  public finalizar(): void {
    this.status = StatusEtapa.CONCLUIDA;
  }

  public definirResultado(resultado: ResultadoTeste): void {
    if (this.status !== StatusEtapa.CONCLUIDA) {
      throw new Error("A etapa precisa estar concluída para registrar resultado.");
    }
    this.resultadoTeste = resultado;
  }

  public listarFuncionarios(): Funcionario[] {
    return this.funcionarios;
  }

  public descrever(): string {
    return `ID: ${this.id} | Nome: ${this.nome} | AeronaveID: ${this.aeronaveId} | Status: ${this.status} | Resultado: ${this.resultadoTeste ?? "N/A"} | Desc: ${this.descricao}`;
  }
}
