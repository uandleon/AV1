"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aeronave = void 0;
class Aeronave {
    constructor(id, modelo, fabricante, tipo) {
        this.id = id;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.tipo = tipo;
        this.etapas = [];
    }
    adicionarEtapa(etapa) {
        this.etapas.push(etapa);
    }
    listarEtapas() {
        return this.etapas;
    }
    descrever() {
        return `ID: ${this.id}, Modelo: ${this.modelo}, Tipo: ${this.tipo}`;
    }
}
exports.Aeronave = Aeronave;
