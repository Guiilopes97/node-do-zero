# 🚀 API de Vídeos - Node.js do Zero

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Rocketseat](https://img.shields.io/badge/Rocketseat-8257E5?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADFSURBVHgBnZKxDcIwEEXPJhKFW7CBWIERGIERyAZhBDZgBEZgBEZgBEaAEegQEqVzf0nOsg0S/+k+v3/2nQEw5w+MMZfknPOitV7knB/Mcy6lPBljLmVZHt77x1LKE+XcWntXSh1TSm9N03wYY67MOR+llF6892dK6RXl3Fp7q6rqkHN+aps2xvjKOXdijLlgjLlgjFm2bXtgjLlgjFm2bXtgjLlgjFm2bXtgjLlgjFm2bXtgjLlgjFm2bXtgjLlgjFm2bTt+AXTfhSZwzxJxAAAAAElFTkSuQmCC&logoColor=white)

> 📚 Projeto desenvolvido durante o curso **Node.js do Zero** da Rocketseat, criando uma API RESTful completa com Node.js, Fastify e PostgreSQL.

## 📋 Sobre o Projeto

Este projeto é uma **API REST** para gerenciamento de vídeos, desenvolvida como parte do aprendizado prático de Node.js. A aplicação demonstra conceitos fundamentais de desenvolvimento backend, incluindo criação de servidor HTTP, rotas, operações CRUD, integração com banco de dados e deploy em produção.

### 🎯 Objetivos de Aprendizado

- ✅ Criar um servidor HTTP do zero com Node.js
- ✅ Trabalhar com o framework Fastify
- ✅ Implementar operações CRUD completas
- ✅ Integrar com banco de dados PostgreSQL
- ✅ Gerenciar variáveis de ambiente
- ✅ Preparar aplicação para deploy

## ✨ Funcionalidades

- 📝 **Criar vídeos** - Adicionar novos vídeos ao banco de dados
- 📖 **Listar vídeos** - Visualizar todos os vídeos cadastrados
- 🔍 **Buscar vídeos** - Filtrar vídeos por título
- ✏️ **Atualizar vídeos** - Editar informações de vídeos existentes
- 🗑️ **Deletar vídeos** - Remover vídeos do banco de dados

## 🛠️ Tecnologias Utilizadas

### Backend
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript
- **[Fastify](https://www.fastify.io/)** - Framework web de alta performance
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional

### Bibliotecas
- **[postgres](https://www.npmjs.com/package/postgres)** - Cliente PostgreSQL para Node.js
- **[dotenv](https://www.npmjs.com/package/dotenv)** - Gerenciamento de variáveis de ambiente

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) - versão 18 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Conta no [Neon](https://neon.tech/) ou PostgreSQL local

## 🚀 Como Executar o Projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/Guiilopes97/node-do-zero.git
cd node-do-zero
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PGHOST=seu-host.neon.tech
PGDATABASE=neondb
PGUSER=seu-usuario
PGPASSWORD=sua-senha
ENDPOINT_ID=seu-endpoint-id
PORT=3333
```

> 💡 **Dica:** Use o arquivo `.env.example` como referência

### 4️⃣ Crie a tabela no banco de dados

```bash
node create-table.js
```

### 5️⃣ Execute o servidor

**Modo desenvolvimento (com hot reload):**
```bash
npm run dev
```

**Modo produção:**
```bash
npm start
```

O servidor estará rodando em: `http://localhost:3333`

## 📡 Endpoints da API

### Documentação das Rotas

#### 🏠 Listar todas as rotas
```http
GET /
```

Retorna documentação de todas as rotas disponíveis.

---

#### ➕ Criar um novo vídeo
```http
POST /videos
Content-Type: application/json

{
  "title": "Título do vídeo",
  "description": "Descrição do vídeo",
  "duration": 180
}
```

**Resposta:** `201 Created`

---

#### 📋 Listar todos os vídeos
```http
GET /videos
```

**Resposta:**
```json
[
  {
    "id": "uuid-do-video",
    "title": "Título do vídeo",
    "description": "Descrição do vídeo",
    "duration": 180
  }
]
```

---

#### 🔍 Buscar vídeos por título
```http
GET /videos?search=node
```

Retorna apenas vídeos que contenham "node" no título.

---

#### ✏️ Atualizar um vídeo
```http
PUT /videos/:id
Content-Type: application/json

{
  "title": "Novo título",
  "description": "Nova descrição",
  "duration": 200
}
```

**Resposta:** `204 No Content`

---

#### 🗑️ Deletar um vídeo
```http
DELETE /videos/:id
```

**Resposta:** `204 No Content`

## 📁 Estrutura do Projeto

```
node-do-zero/
├── 📄 server.js              # Servidor principal e rotas
├── 📄 database-memory.js     # Implementação em memória (para testes)
├── 📄 database-postgres.js   # Implementação com PostgreSQL
├── 📄 db.js                  # Configuração do banco de dados
├── 📄 create-table.js        # Script para criar tabela
├── 📄 routes.http            # Exemplos de requisições HTTP
├── 📄 package.json           # Dependências e scripts
├── 📄 .env                   # Variáveis de ambiente (não versionado)
├── 📄 .gitignore             # Arquivos ignorados pelo Git
└── 📄 README.md              # Documentação do projeto
```

## 🗄️ Estrutura do Banco de Dados

### Tabela: `videos`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | TEXT (UUID) | Identificador único do vídeo |
| `title` | VARCHAR(255) | Título do vídeo |
| `description` | TEXT | Descrição detalhada |
| `duration` | INTEGER | Duração em segundos |

## 🧪 Testando a API

### Usando o REST Client (VS Code)

Se você usa o VS Code, instale a extensão [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) e use o arquivo `routes.http` para testar todas as rotas.

### Usando cURL

**Criar vídeo:**
```bash
curl -X POST http://localhost:3333/videos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Meu Vídeo",
    "description": "Descrição do vídeo",
    "duration": 120
  }'
```

**Listar vídeos:**
```bash
curl http://localhost:3333/videos
```

### Usando Postman ou Insomnia

Importe as requisições do arquivo `routes.http` ou configure manualmente usando a documentação dos endpoints acima.

## 🌐 Deploy

Este projeto está preparado para deploy em plataformas como:

- **[Render](https://render.com/)** ✅ Recomendado
- **[Railway](https://railway.app/)**
- **[Fly.io](https://fly.io/)**
- **[Heroku](https://www.heroku.com/)**

### Exemplo de Deploy no Render

1. Conecte seu repositório GitHub
2. Configure as variáveis de ambiente
3. O Render detectará automaticamente o `package.json`
4. Deploy automático a cada push!

## 📚 Conceitos Aprendidos

- 🔹 Criação de servidor HTTP com Node.js
- 🔹 Framework Fastify e suas vantagens
- 🔹 Padrão REST e operações CRUD
- 🔹 Integração com banco de dados PostgreSQL
- 🔹 Uso de ES Modules (`import/export`)
- 🔹 Async/await e Promises
- 🔹 Query strings e parâmetros de rota
- 🔹 Variáveis de ambiente e segurança
- 🔹 Abstração e boas práticas de código

## 🎓 Sobre o Curso

Este projeto foi desenvolvido durante o curso **Node.js do Zero** da [Rocketseat](https://www.rocketseat.com.br/), ministrado por **Diego Fernandes**.

### 🔗 Links Úteis

- [🎥 Curso Original](https://www.youtube.com/watch?v=hHM-hr9q4mo)
- [📚 Documentação Fastify](https://www.fastify.io/)
- [🐘 Neon PostgreSQL](https://neon.tech/)
- [💜 Rocketseat](https://www.rocketseat.com.br/)


## 📝 Licença

Este projeto está sob a licença ISC.
