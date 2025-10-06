// src/models/Peca.ts
export class Peca {
  constructor(
    public id: number,
    public nome: string,
    public status: string = "Em estoque"
  ) {}

  descrever(): string {
    return `ID: ${this.id} | Nome: ${this.nome} | Status: ${this.status}`;
  }
}
