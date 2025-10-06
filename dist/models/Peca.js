"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peca = void 0;
// src/models/Peca.ts
class Peca {
    constructor(id, nome, status = "Em estoque") {
        this.id = id;
        this.nome = nome;
        this.status = status;
    }
    descrever() {
        return `ID: ${this.id} | Nome: ${this.nome} | Status: ${this.status}`;
    }
}
exports.Peca = Peca;
