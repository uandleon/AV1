"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etapa = void 0;
const StatusEtapa_1 = require("../enums/StatusEtapa");
class Etapa {
    constructor(id, nome, aeronaveId, descricao = "", status = StatusEtapa_1.StatusEtapa.PENDENTE) {
        this.id = id;
        this.nome = nome;
        this.aeronaveId = aeronaveId;
        this.descricao = descricao;
        this.status = status;
        this.funcionarios = [];
    }
    adicionarFuncionario(func) {
        this.funcionarios.push(func);
    }
    iniciar() {
        this.status = StatusEtapa_1.StatusEtapa.ANDAMENTO;
    }
    finalizar() {
        this.status = StatusEtapa_1.StatusEtapa.CONCLUIDA;
    }
    definirResultado(resultado) {
        if (this.status !== StatusEtapa_1.StatusEtapa.CONCLUIDA) {
            throw new Error("A etapa precisa estar concluída para registrar resultado.");
        }
        this.resultadoTeste = resultado;
    }
    listarFuncionarios() {
        return this.funcionarios;
    }
    descrever() {
        var _a;
        return `ID: ${this.id} | Nome: ${this.nome} | AeronaveID: ${this.aeronaveId} | Status: ${this.status} | Resultado: ${(_a = this.resultadoTeste) !== null && _a !== void 0 ? _a : "N/A"} | Desc: ${this.descricao}`;
    }
}
exports.Etapa = Etapa;
