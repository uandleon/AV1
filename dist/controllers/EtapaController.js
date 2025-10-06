"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtapaController = void 0;
// src/controllers/EtapaController.ts
const Etapa_1 = require("../models/Etapa");
class EtapaController {
    constructor() {
        this.etapas = [];
        this.contadorId = 1;
    }
    cadastrar(nome, aeronaveId, descricao = "") {
        // cria a etapa passando id, nome, aeronaveId e descricao (status usa o default do model)
        const etapa = new Etapa_1.Etapa(this.contadorId++, nome, aeronaveId, descricao);
        this.etapas.push(etapa);
        return etapa;
    }
    listar() {
        return this.etapas;
    }
    listarPorAeronave(aeronaveId) {
        return this.etapas.filter(e => e.aeronaveId === aeronaveId);
    }
    buscarPorId(id) {
        return this.etapas.find(e => e.id === id);
    }
}
exports.EtapaController = EtapaController;
