"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuncionarioController = void 0;
// src/controllers/FuncionarioController.ts
const Funcionario_1 = require("../models/Funcionario");
class FuncionarioController {
    constructor() {
        this.funcionarios = [];
        this.contadorId = 1;
    }
    cadastrar(nome, email, senha, permissao) {
        const funcionario = new Funcionario_1.Funcionario(this.contadorId++, nome, email, senha, permissao);
        this.funcionarios.push(funcionario);
        return funcionario;
    }
    listar() {
        return this.funcionarios;
    }
    autenticar(email, senha) {
        return this.funcionarios.find(f => f.email === email && f.senha === senha) || null;
    }
    // 🔥 Adicione este método:
    buscarPorId(id) {
        return this.funcionarios.find(f => f.id === id) || null;
    }
}
exports.FuncionarioController = FuncionarioController;
