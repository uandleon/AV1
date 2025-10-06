import { TipoAeronautico } from "../enums/TipoAeronautico";
import { Etapa } from "./Etapa";

export class Aeronave {
  private etapas: Etapa[] = [];

  constructor(
    public id: number,
    public modelo: string,
    public fabricante: string,
    public tipo: TipoAeronautico
  ) {}

  public adicionarEtapa(etapa: Etapa): void {
    this.etapas.push(etapa);
  }

  public listarEtapas(): Etapa[] {
    return this.etapas;
  }

  public descrever(): string {
    return `ID: ${this.id}, Modelo: ${this.modelo}, Tipo: ${this.tipo}`;
  }
}
