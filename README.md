# ⚽ Projeto Champions

Uma API REST desenvolvida em **Node.js** e **TypeScript** para gerenciar clubes e jogadores de futebol com estatísticas detalhadas.

## 📋 Características

- ✅ CRUD completo de jogadores
- ✅ Gerenciamento de clubes
- ✅ Estatísticas detalhadas dos jogadores (Ritmo, Chute, Passe, Drible, Defesa, Físico)
- ✅ Arquitetura em camadas (Controllers → Services → Repositories)
- ✅ Suporte a CORS
- ✅ Tipagem completa com TypeScript
- ✅ Variáveis de ambiente com .env

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express.js** (v5.2.1) - Framework web
- **TypeScript** (v5.9.3) - Linguagem de tipagem estática
- **CORS** (v2.8.6) - Controle de requisições cross-origin
- **TSup** (v8.5.1) - Bundler moderno
- **tsx** (v4.21.0) - Executor de TypeScript

## 📦 Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn
- Git (para clonar o repositório)

## 💻 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd projeto-champions
```

2. Instale as dependências:
```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto (se necessário):
```env
PORT=3000
NODE_ENV=development
```

## 🎯 Como Executar

### Desenvolvimento
```bash
# Iniciar servidor com hot reload
npm run dev:watch
```

### Servidor de Desenvolvimento (sem watch)
```bash
npm run dev:start
```

### Produção
```bash
npm run dist:start
```

## 📡 Endpoints

### Jogadores

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/players` | Listar todos os jogadores |
| GET | `/api/players/:id` | Obter jogador por ID |
| POST | `/api/players` | Criar novo jogador |
| PATCH | `/api/players/:id` | Atualizar jogador |
| DELETE | `/api/players/:id` | Deletar jogador |

### Clubes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/clubs` | Listar todos os clubes |

## 📝 Exemplo de Requisição

### Criar Jogador
```bash
POST /api/players
Content-Type: application/json

{
  "id": 1,
  "name": "Cristiano Ronaldo",
  "club": "Manchester United",
  "nationality": "Portugal",
  "position": "Atacante",
  "statistics": {
    "Overall": 93,
    "Pace": 89,
    "Shooting": 93,
    "Passing": 82,
    "Dribbling": 87,
    "Defending": 35,
    "Physical": 79
  }
}
```

### Listar Jogadores
```bash
GET /api/players
```

## 📂 Estrutura do Projeto

```
src/
├── app.ts                    # Configuração da aplicação Express
├── server.ts                 # Inicialização do servidor
├── controllers/              # Camada de Controllers (requisições HTTP)
│   ├── clubs-controller.ts
│   └── players-controller.ts
├── services/                 # Camada de Serviços (lógica de negócio)
│   ├── clubs-service.ts
│   └── players-service.ts
├── repositories/             # Camada de Repositórios (acesso a dados)
│   ├── club-repository.ts
│   └── player-repository.ts
├── models/                   # Interfaces e tipos TypeScript
│   ├── club-model.ts
│   ├── player-model.ts
│   ├── statistics-model.ts
│   └── http-response-model.ts
├── routes/                   # Definição de rotas
│   └── routes.ts
├── data/                     # Dados estáticos
│   └── clubs.json
└── utils/                    # Funções auxiliares
    └── http-helper.ts
```

## 🏗️ Arquitetura

O projeto segue o padrão de **Arquitetura em Camadas**:

1. **Controllers** - Recebem requisições HTTP e delegam à camada de serviços
2. **Services** - Contêm a lógica de negócio da aplicação
3. **Repositories** - Gerenciam o acesso aos dados
4. **Models** - Definem interfaces e tipos TypeScript
5. **Utils** - Funções auxiliares e helpers

## 🔧 Scripts Disponíveis

```bash
npm run dist        # Gera build otimizado em ./dist
npm run dev:start   # Inicia servidor em desenvolvimento
npm run dev:watch   # Inicia servidor com hot reload
npm run dist:start  # Gera build e inicia em produção
```

## 📜 Licença

MIT

## 👨‍💻 Autor

Desenvolvido como parte do projeto DIO
Luís Sandri

---

**Nota:** Este é um projeto educacional desenvolvido para aprender sobre arquitetura de APIs REST com TypeScript e Express. Sinta-se livre para contribuir, reportar problemas ou sugerir melhorias!

