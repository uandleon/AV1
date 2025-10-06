"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AeronaveController = void 0;
const Aeronave_1 = require("../models/Aeronave");
class AeronaveController {
    constructor() {
        this.aeronaves = [];
        this.proximoId = 1;
    }
    cadastrar(modelo, fabricante, tipo) {
        const nova = new Aeronave_1.Aeronave(this.proximoId++, modelo, fabricante, tipo);
        this.aeronaves.push(nova);
        return nova;
    }
    listar() {
        return this.aeronaves;
    }
    buscarPorId(id) {
        return this.aeronaves.find(a => a.id === id);
    }
}
exports.AeronaveController = AeronaveController;
