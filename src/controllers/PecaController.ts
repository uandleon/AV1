// src/controllers/PecaController.ts
import { Peca } from "../models/Peca";

export class PecaController {
  private pecas: Peca[] = []; // <-- TIPAGEM IMPORTANTE
  private contadorId: number = 1;

  cadastrar(nome: string): Peca {
    const novaPeca = new Peca(this.contadorId++, nome);
    this.pecas.push(novaPeca);
    return novaPeca;
  }

  listar(): Peca[] {
    return this.pecas;
  }

  atualizarStatus(id: number, novoStatus: string): boolean {
    const peca = this.pecas.find((p) => p.id === id);
    if (peca) {
      peca.status = novoStatus;
      return true;
    }
    return false;
  }
}
