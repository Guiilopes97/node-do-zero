# 🚀 NodeMaster - Dominando Node.js do Absoluto Zero

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Status](https://img.shields.io/badge/status-active-success.svg?style=for-the-badge)

> 📚 Uma jornada completa de aprendizado em Node.js, desde os conceitos fundamentais até aplicações avançadas do mundo real

## 🎯 Sobre o Projeto

O **NodeMaster** é um projeto educacional que documenta minha jornada de aprendizado em Node.js, partindo do zero absoluto até a construção de aplicações completas e profissionais. Este repositório serve como guia prático e referência para desenvolvedores que desejam dominar o ecossistema Node.js.

### 💡 Objetivos do Projeto

- 🎓 **Aprender fazendo**: Código prático e exemplos reais
- 📖 **Documentar a jornada**: Registro de desafios e soluções
- 🛠️ **Construir portfolio**: Projetos demonstrando habilidades
- 🤝 **Compartilhar conhecimento**: Ajudar outros desenvolvedores

## ✨ O Que Você Vai Encontrar Aqui

### 📚 Conceitos Fundamentais
- Fundamentos do JavaScript assíncrono
- Event Loop e Non-blocking I/O
- Callbacks, Promises e Async/Await
- Módulos e Sistema de Pacotes (NPM)
- Sistema de arquivos (fs)
- Streams e Buffers

### 🌐 Desenvolvimento Web
- Criação de servidores HTTP
- Framework Express.js
- Roteamento e Middlewares
- RESTful APIs
- Autenticação e Autorização
- Validação de dados

### 💾 Banco de Dados
- Integração com MongoDB
- SQL com PostgreSQL/MySQL
- ORMs (Sequelize, Prisma)
- Queries e Relacionamentos
- Migrations e Seeds

### 🔧 Ferramentas e Boas Práticas
- Gerenciamento de variáveis de ambiente
- Tratamento de erros
- Logging e Debugging
- Testes (Jest, Mocha)
- Segurança (Helmet, CORS)
- Documentação de APIs (Swagger)

## 🛠️ Tecnologias Utilizadas

```json
{
  "runtime": "Node.js v20+",
  "linguagem": "JavaScript (ES6+)",
  "framework": "Express.js",
  "databases": ["MongoDB", "PostgreSQL"],
  "testing": ["Jest", "Supertest"],
  "tools": ["Nodemon", "ESLint", "Prettier"]
}
```

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- Editor de código ([VS Code](https://code.visualstudio.com/) recomendado)
- [MongoDB](https://www.mongodb.com/) (opcional, dependendo do projeto)
- [PostgreSQL](https://www.postgresql.org/) (opcional, dependendo do projeto)

## 🚀 Como Começar

### 1. Clone o repositório

```bash
git clone https://github.com/Guiilopes97/node-do-zero.git
cd node-do-zero
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

### 4. Execute o projeto

```bash
# Modo desenvolvimento (com hot reload)
npm run dev

# Modo produção
npm start

# Executar testes
npm test
```

## 📁 Estrutura do Projeto

```
node-do-zero/
├── 📂 01-fundamentos/          # Conceitos básicos do Node.js
│   ├── hello-world.js
│   ├── modules.js
│   └── async-await.js
│
├── 📂 02-http-server/          # Criando servidores HTTP
│   ├── basic-server.js
│   └── routing.js
│
├── 📂 03-express/              # Framework Express.js
│   ├── routes/
│   ├── middlewares/
│   └── controllers/
│
├── 📂 04-database/             # Integração com bancos de dados
│   ├── mongodb/
│   ├── postgresql/
│   └── models/
│
├── 📂 05-api-rest/             # APIs RESTful completas
│   ├── src/
│   ├── tests/
│   └── docs/
│
├── 📂 06-autenticacao/         # Autenticação e segurança
│   ├── jwt/
│   ├── oauth/
│   └── sessions/
│
├── 📂 07-testes/               # Testes automatizados
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
└── 📂 08-projetos-completos/   # Aplicações finais
    ├── blog-api/
    ├── ecommerce-api/
    └── chat-realtime/
```

## 🎓 Roteiro de Aprendizado

### Nível Iniciante 🌱
- [ ] Configurar ambiente de desenvolvimento
- [ ] Entender o Event Loop
- [ ] Criar primeiro servidor HTTP
- [ ] Trabalhar com módulos
- [ ] Manipular arquivos

### Nível Intermediário 🌿
- [ ] Dominar Express.js
- [ ] Criar API RESTful
- [ ] Integrar banco de dados
- [ ] Implementar autenticação
- [ ] Validação de dados

### Nível Avançado 🌳
- [ ] Escrever testes automatizados
- [ ] Implementar WebSockets
- [ ] Otimização de performance
- [ ] Deploy e CI/CD
- [ ] Arquitetura escalável

## 🔥 Projetos Destaque

### 1. 📝 Blog API
Uma API RESTful completa para gerenciamento de blog com autenticação JWT, upload de imagens e comentários.

**Stack:** Express + MongoDB + JWT

### 2. 🛒 E-commerce API
Sistema de e-commerce com carrinho de compras, processamento de pagamentos e gerenciamento de estoque.

**Stack:** Express + PostgreSQL + Stripe

### 3. 💬 Chat em Tempo Real
Aplicação de chat com WebSockets, salas privadas e notificações em tempo real.

**Stack:** Socket.io + Express + Redis

## 📚 Recursos de Aprendizado

- 📖 [Documentação Oficial do Node.js](https://nodejs.org/docs/)
- 📘 [Guia Express.js](https://expressjs.com/)
- 🎥 [Vídeos recomendados](#)
- 📝 [Artigos e tutoriais](#)
- 💬 [Comunidade Discord/Slack](#)

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Testes com cobertura
npm run test:coverage

# Testes em modo watch
npm run test:watch

# Testes de integração
npm run test:integration
```

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Este é um projeto de aprendizado e toda ajuda é valiosa.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

### 💡 Ideias para Contribuir
- Adicionar novos exemplos
- Melhorar documentação
- Corrigir bugs
- Sugerir novos projetos
- Compartilhar recursos de aprendizado

## 📝 Anotações e Aprendizados

Mantenho um [LEARNING.md](LEARNING.md) com minhas anotações, desafios enfrentados e soluções encontradas durante o aprendizado. Confira para insights e dicas!

## 🐛 Problemas Conhecidos

Veja a aba [Issues](https://github.com/Guiilopes97/node-do-zero/issues) para uma lista completa de problemas conhecidos e features propostas.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
