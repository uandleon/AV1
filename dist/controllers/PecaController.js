"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PecaController = void 0;
// src/controllers/PecaController.ts
const Peca_1 = require("../models/Peca");
class PecaController {
    constructor() {
        this.pecas = []; // <-- TIPAGEM IMPORTANTE
        this.contadorId = 1;
    }
    cadastrar(nome) {
        const novaPeca = new Peca_1.Peca(this.contadorId++, nome);
        this.pecas.push(novaPeca);
        return novaPeca;
    }
    listar() {
        return this.pecas;
    }
    atualizarStatus(id, novoStatus) {
        const peca = this.pecas.find((p) => p.id === id);
        if (peca) {
            peca.status = novoStatus;
            return true;
        }
        return false;
    }
}
exports.PecaController = PecaController;
