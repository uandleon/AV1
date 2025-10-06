// src/controllers/EtapaController.ts
import { Etapa } from "../models/Etapa";

export class EtapaController {
  private etapas: Etapa[] = [];
  private contadorId: number = 1;

  public cadastrar(nome: string, aeronaveId: number, descricao: string = ""): Etapa {
    // cria a etapa passando id, nome, aeronaveId e descricao (status usa o default do model)
    const etapa = new Etapa(this.contadorId++, nome, aeronaveId, descricao);
    this.etapas.push(etapa);
    return etapa;
  }

  public listar(): Etapa[] {
    return this.etapas;
  }

  public listarPorAeronave(aeronaveId: number): Etapa[] {
    return this.etapas.filter(e => e.aeronaveId === aeronaveId);
  }

  public buscarPorId(id: number): Etapa | undefined {
    return this.etapas.find(e => e.id === id);
  }
}
