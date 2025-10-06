// src/controllers/FuncionarioController.ts
import { Funcionario } from "../models/Funcionario";
import { NivelPermissao } from "../enums/NivelPermissao";

export class FuncionarioController {
  private funcionarios: Funcionario[] = [];
  private contadorId: number = 1;

  cadastrar(nome: string, email: string, senha: string, permissao: NivelPermissao): Funcionario {
    const funcionario = new Funcionario(this.contadorId++, nome, email, senha, permissao);
    this.funcionarios.push(funcionario);
    return funcionario;
  }

  listar(): Funcionario[] {
    return this.funcionarios;
  }

  autenticar(email: string, senha: string): Funcionario | null {
    return this.funcionarios.find(f => f.email === email && f.senha === senha) || null;
  }

  // 🔥 Adicione este método:
  buscarPorId(id: number): Funcionario | null {
    return this.funcionarios.find(f => f.id === id) || null;
  }
}
