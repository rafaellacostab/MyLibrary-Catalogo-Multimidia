MyLibrary - Catálogo Multimídia (API - Back-end)

API desenvolvida em Node.js, Express e MongoDB para gerenciar um catálogo multimídia com livros, filmes e séries.
Fornece endpoints REST completos utilizados pelo front-end React.


Tecnologias Utilizadas:

- Node.js
- Express
- MongoDB Compass
- Mongoose
- CORS
- Nodemon


Estrutura do Projeto:

backend/
├── controllers/
│   └── obras.controller.js
├── models/
│   └── Obra.js
├── routes/
│   └── obraRoutes.js
├── nodemon.json
├── package.json
├── package-lock.json
└── server.js


Funcionalidades da API:

- CRUD completo de obras
- Conexão com MongoDB via Compass
- URLs de imagem e hoverImagem
- Ordenação por data de criação
- Validações com Mongoose
- Comunicação com o front-end via Axios


Estrutura da Obra (Schema):

titulo: String  
tipo: Livro | Filme | Série  
autor: String  
genero: String  
ano: Number  
status: String  
avaliacao: String  
imagem: URL  
hoverImagem: URL  
descricao: String  


Endpoints da API (REST):

Base URL:
http://localhost:5000/obras

Listar todas as obras:
GET /obras

Buscar obra por ID:
GET /obras/:id

Criar nova obra:
POST /obras
Exemplo:
{
  "titulo": "Quarta Asa",
  "tipo": "Livro",
  "autor": "Rebecca Yarros",
  "genero": "Fantasia romântica",
  "ano": 2023,
  "status": "Já li",
  "avaliacao": "Amei",
  "imagem": "https://...",
  "hoverImagem": "https://...",
  "descricao": "Quarta Asa é um livro de fantasia e romance..."
}

Editar obra:
PUT /obras/:id

Excluir obra:
DELETE /obras/:id


Como Executar o Projeto:

1. Clonar o repositório:
git clone <URL_DO_REPO>
cd backend

2. Instalar dependências:
npm install

3. Executar o servidor:
Modo desenvolvimento: npm run dev
Modo produção: npm start


Testes com Postman / Insomnia:

Testar rotas:
GET    /obras
GET    /obras/:id
POST   /obras
PUT    /obras/:id
DELETE /obras/:id

API disponível em:
http://localhost:5000/obras


Observação:

Este back-end se integra ao front-end React, que consome todos os endpoints acima.
A documentação do front se encontra na pasta correspondente.


Desenvolvido por:

Rafaella Costa Barbosa  
Disciplina: Linguagem de Programação para Internet – UNIUBE
