"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(id, nome, email, senha, permissao) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.permissao = permissao;
    }
    descrever() {
        return `ID: ${this.id}, Nome: ${this.nome}, Permissão: ${this.permissao}`;
    }
}
exports.Funcionario = Funcionario;
