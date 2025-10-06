# 🛩️ Sistema de Manutenção Aeronáutica (CLI)

Este projeto é um **sistema de gerenciamento de manutenção aeronáutica** desenvolvido em **TypeScript (Node.js)**.  
O sistema roda no terminal (modo CLI) e permite gerenciar funcionários, aeronaves, peças, etapas de manutenção e resultados de testes.  

---

## 📋 Funcionalidades

- ✅ Login de funcionários com níveis de permissão  
- ✅ Cadastro e listagem de funcionários  
- ✅ Cadastro e listagem de aeronaves  
- ✅ Cadastro de peças  
- ✅ Cadastro e acompanhamento de etapas de manutenção  
- ✅ Associação de funcionários às etapas  
- ✅ Início e finalização de etapas  
- ✅ Registro de resultados de testes  
- ✅ Listagem de etapas com resultados  

---

## 🚀 Tecnologias Utilizadas

- **Node.js** (ambiente de execução)  
- **TypeScript** (linguagem principal)  
- **ts-node** (para executar sem compilar)  

---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Pré-requisitos
- Node.js instalado (versão **18+** recomendada)
- npm ou yarn como gerenciador de pacotes

### 2️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

### 3️⃣ Instalar dependências
npm install

### 4️⃣ Compilar o projeto
npx tsc

### 5️⃣ Executar o programa
node dist/index.js

### 👨‍💻 Criando o primeiro usuário ADMIN
Ao rodar o sistema pela primeira vez, é necessário cadastrar um usuário com permissão ADMIN.
Esse usuário terá acesso a todas as funcionalidades.

