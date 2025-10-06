"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teste = void 0;
class Teste {
    constructor(id, tipo, resultado, responsavel, observacoes) {
        this.id = id;
        this.tipo = tipo;
        this.resultado = resultado;
        this.responsavel = responsavel;
        this.observacoes = observacoes;
    }
    descrever() {
        return `Teste ${this.tipo} (${this.resultado}) por ${this.responsavel.nome}`;
    }
}
exports.Teste = Teste;
