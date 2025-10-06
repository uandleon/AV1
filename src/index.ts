// src/index.ts
import { perguntar } from "./utils/input"; 
import { FuncionarioController } from "./controllers/FuncionarioController";
import { AeronaveController } from "./controllers/AeronaveController";
import { NivelPermissao } from "./enums/NivelPermissao";
import { TipoAeronautico } from "./enums/TipoAeronautico";
import { PecaController } from "./controllers/PecaController";
import { EtapaController } from "./controllers/EtapaController";
import { ResultadoTeste } from "./enums/ResultadoTeste";

const pecaController = new PecaController();
const funcionarioController = new FuncionarioController();
const aeronaveController = new AeronaveController();
const etapaController = new EtapaController();

// Guarda o usuário atual
let usuarioLogado: any = null;

function mostrarMenu() {
  console.log(`
1. Login
2. Cadastrar Funcionário
3. Cadastrar Aeronave
4. Listar Aeronaves
5. Cadastrar Peça
7. Cadastrar Etapa
8. Listar Etapas
9. Associar Funcionário à Etapa
10. Listar Funcionários de uma Etapa
11. Iniciar Etapa
12. Finalizar Etapa
13. Cadastrar Resultado de Teste
14. Listar Etapas com Resultados de Testes
0. Sair
  `);

  const opcao = perguntar("Escolha uma opcao: ");

  switch (opcao) {
    case "1": login(); break;
    case "2": cadastrarFuncionario(); break;

    // Todas as demais passam por verificarLogin
    case "3": verificarLogin(cadastrarAeronave); break;
    case "4": verificarLogin(listarAeronaves); break;
    case "5": verificarLogin(cadastrarPeca); break;
    case "7": verificarLogin(cadastrarEtapa); break;
    case "8": verificarLogin(listarEtapas); break;
    case "9": verificarLogin(associarFuncionarioEtapa); break;
    case "10": verificarLogin(listarFuncionariosEtapa); break;
    case "11": verificarLogin(iniciarEtapa); break;
    case "12": verificarLogin(finalizarEtapa); break;
    case "13": verificarLogin(cadastrarResultadoTeste); break;
    case "14": verificarLogin(listarEtapasComResultados); break;

    case "0": 
      console.log("Encerrando..."); 
      return; // aqui sim pode sair
    default: 
      console.log("Opcao inválida.");
  }

  // 🔄 mantém o loop
  mostrarMenu();
}


// ================= LOGIN CHECK =================
function verificarLogin(func: Function) {
  if (!usuarioLogado) {
    console.log("⚠️ Você precisa estar logado para acessar esta função.");
    return;
  }
  func();
}

// ========== FUNCIONÁRIO ==========
function cadastrarFuncionario() {
  console.log("\n--- Cadastro de Funcionário ---");
  const nome = perguntar("Nome: ");
  const email = perguntar("Email: ");
  const senha = perguntar("Senha: ");

  console.log("Permissões disponíveis:");
  Object.values(NivelPermissao).forEach((p, i) => console.log(`${i + 1}. ${p}`));

  const permissaoIndex = parseInt(perguntar("Escolha a permissão (1-3): ")) - 1;
  const permissao = Object.values(NivelPermissao)[permissaoIndex];

  if (!permissao) {
    console.log("Permissão inválida!");
    return;
  }

  const funcionario = funcionarioController.cadastrar(nome, email, senha, permissao);
  console.log("Funcionário cadastrado com sucesso:");
  console.log(funcionario.descrever());
}

function login() {
  console.log("\n--- Login ---");
  const email = perguntar("Email: ");
  const senha = perguntar("Senha: ");
  const user = funcionarioController.autenticar(email, senha);

  if (user) {
    usuarioLogado = user;
    console.log(`✅ Bem-vindo, ${user.nome}! (${user.permissao})`);
  } else {
    console.log("Credenciais inválidas.");
  }
}

// ========== AERONAVE ==========
function cadastrarAeronave() {
  console.log("\n--- Cadastro de Aeronave ---");
  const modelo = perguntar("Modelo: ");
  const fabricante = perguntar("Fabricante: ");

  console.log("Tipos de Aeronave disponíveis:");
  Object.values(TipoAeronautico).forEach((t, i) => console.log(`${i + 1}. ${t}`));

  const tipoIndex = parseInt(perguntar("Escolha o tipo (1-2): ")) - 1;
  const tipo = Object.values(TipoAeronautico)[tipoIndex];

  if (!tipo) {
    console.log("Tipo inválido.");
    return;
  }

  const aeronave = aeronaveController.cadastrar(modelo, fabricante, tipo);
  console.log("Aeronave cadastrada com sucesso:");
  console.log(aeronave.descrever());
}

function listarAeronaves() {
  console.log("\n--- Lista de Aeronaves ---");
  const aeronaves = aeronaveController.listar();
  if (aeronaves.length === 0) {
    console.log("Nenhuma aeronave cadastrada.");
    return;
  }
  aeronaves.forEach(a => console.log(a.descrever()));
}

// ========== PEÇA ==========
function cadastrarPeca() {
  console.log("\n--- Cadastro de Peça ---");
  const nome = perguntar("Nome da peça: ");
  const peca = pecaController.cadastrar(nome);
  console.log(`Peça cadastrada com sucesso! ID: ${peca.id}`);
}

// ========== ETAPA ==========
function cadastrarEtapa() {
  console.log("\n--- Cadastro de Etapa ---");
  const aeronaves = aeronaveController.listar();
  if (aeronaves.length === 0) {
    console.log("Nenhuma aeronave cadastrada. Cadastre uma aeronave primeiro.");
    return;
  }

  aeronaves.forEach(a => console.log(a.descrever()));

  const aeronaveId = Number(perguntar("Digite o ID da aeronave: "));
  const aeronave = aeronaveController.buscarPorId(aeronaveId);
  if (!aeronave) {
    console.log("Aeronave não encontrada.");
    return;
  }

  const nomeEtapa = perguntar("Nome da etapa: ");
  const descricao = perguntar("Descrição (opcional): ");

  const etapa = etapaController.cadastrar(nomeEtapa, aeronaveId, descricao);
  aeronave.adicionarEtapa(etapa);
  console.log(`Etapa cadastrada com sucesso! ID: ${etapa.id}`);
}

function listarEtapas() {
  console.log("\n--- Lista de Etapas ---");
  const etapas = etapaController.listar();
  if (etapas.length === 0) {
    console.log("Nenhuma etapa cadastrada.");
    return;
  }
  etapas.forEach(e => console.log(e.descrever()));
}

function associarFuncionarioEtapa() {
  console.log("\n--- Associar Funcionário à Etapa ---");
  const etapas = etapaController.listar();
  if (etapas.length === 0) {
    console.log("Nenhuma etapa cadastrada.");
    return;
  }
  etapas.forEach(e => console.log(e.descrever()));

  const etapaId = Number(perguntar("Digite o ID da etapa: "));
  const etapa = etapaController.buscarPorId(etapaId);
  if (!etapa) {
    console.log("Etapa não encontrada.");
    return;
  }

  const funcionarios = funcionarioController.listar();
  if (funcionarios.length === 0) {
    console.log("Nenhum funcionário cadastrado.");
    return;
  }
  funcionarios.forEach(f => console.log(f.descrever()));

  const funcionarioId = Number(perguntar("Digite o ID do funcionário: "));
  const funcionario = funcionarioController.buscarPorId(funcionarioId);
  if (!funcionario) {
    console.log("Funcionário não encontrado.");
    return;
  }

  etapa.adicionarFuncionario(funcionario);
  console.log(`Funcionário ${funcionario.nome} associado à etapa ${etapa.nome}.`);
}

function listarFuncionariosEtapa() {
  console.log("\n--- Listar Funcionários de uma Etapa ---");
  const etapas = etapaController.listar();
  if (etapas.length === 0) {
    console.log("Nenhuma etapa cadastrada.");
    return;
  }
  etapas.forEach(e => console.log(e.descrever()));

  const etapaId = Number(perguntar("Digite o ID da etapa: "));
  const etapa = etapaController.buscarPorId(etapaId);
  if (!etapa) {
    console.log("Etapa não encontrada.");
    return;
  }

  const funcionarios = etapa.listarFuncionarios();
  if (funcionarios.length === 0) {
    console.log("Nenhum funcionário associado a esta etapa.");
    return;
  }

  console.log(`Funcionários da etapa ${etapa.nome}:`);
  funcionarios.forEach(f => console.log(f.descrever()));
}

function iniciarEtapa() {
  console.log("\n--- Iniciar Etapa ---");
  const etapas = etapaController.listar();
  if (etapas.length === 0) {
    console.log("Nenhuma etapa cadastrada.");
    return;
  }

  etapas.forEach(e => console.log(e.descrever()));
  const etapaId = Number(perguntar("Digite o ID da etapa: "));
  const etapa = etapas.find(e => e.id === etapaId);

  if (!etapa) {
    console.log("Etapa não encontrada.");
    return;
  }
  if (etapa.status !== "PENDENTE") {
    console.log("A etapa já foi iniciada ou concluída.");
    return;
  }

  etapa.iniciar();
  console.log(`Etapa ${etapa.id} iniciada com sucesso!`);
}

function finalizarEtapa() {
  console.log("\n--- Finalizar Etapa ---");
  const etapas = etapaController.listar();
  if (etapas.length === 0) {
    console.log("Nenhuma etapa cadastrada.");
    return;
  }

  etapas.forEach(e => console.log(e.descrever()));
  const etapaId = Number(perguntar("Digite o ID da etapa: "));
  const etapa = etapas.find(e => e.id === etapaId);

  if (!etapa) {
    console.log("Etapa não encontrada.");
    return;
  }
  if (etapa.status !== "ANDAMENTO") {
    console.log("A etapa precisa estar em andamento para ser finalizada.");
    return;
  }

  etapa.finalizar();
  console.log(`Etapa ${etapa.id} finalizada com sucesso!`);
}

function cadastrarResultadoTeste() {
  console.log("\n--- Cadastro de Resultado de Teste ---");
  const etapas = etapaController.listar();
  if (etapas.length === 0) {
    console.log("Nenhuma etapa cadastrada.");
    return;
  }

  const concluidas = etapas.filter(e => e.status === "CONCLUIDA");
  if (concluidas.length === 0) {
    console.log("Nenhuma etapa finalizada disponível.");
    return;
  }

  concluidas.forEach(e => console.log(e.descrever()));
  const etapaId = Number(perguntar("Digite o ID da etapa: "));
  const etapa = concluidas.find(e => e.id === etapaId);
  if (!etapa) {
    console.log("Etapa não encontrada.");
    return;
  }

  console.log("Resultados disponíveis:");
  Object.values(ResultadoTeste).forEach((r, i) => console.log(`${i + 1}. ${r}`));

  const resultadoIndex = Number(perguntar("Escolha o resultado: ")) - 1;
  const resultado = Object.values(ResultadoTeste)[resultadoIndex];
  if (!resultado) {
    console.log("Resultado inválido.");
    return;
  }

  etapa.definirResultado(resultado);
  console.log(`Resultado "${resultado}" cadastrado na etapa ${etapa.id}!`);
}

function listarEtapasComResultados() {
  console.log("\n--- Etapas com Resultados de Testes ---");
  const etapas = etapaController.listar();
  if (etapas.length === 0) {
    console.log("Nenhuma etapa cadastrada.");
    return;
  }

  const etapasComResultado = etapas.filter(e => (e as any).resultadoTeste);
  if (etapasComResultado.length === 0) {
    console.log("Nenhuma etapa possui resultado de teste cadastrado.");
    return;
  }

  etapasComResultado.forEach(e => console.log(e.descrever()));
}

mostrarMenu();
