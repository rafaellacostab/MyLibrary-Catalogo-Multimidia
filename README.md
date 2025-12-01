MyLibrary – Catálogo Multimídia
Sistema completo (Front-end + Back-end + Banco de Dados)

Aplicação full-stack desenvolvida para a disciplina Linguagem de Programação para Internet – UNIUBE.  
O sistema permite cadastrar, visualizar, editar e excluir obras multimídia, incluindo livros, filmes e séries.

O projeto é dividido em:
- Front-end: interface visual desenvolvida em React;
- Back-end: API REST desenvolvida em Node.js + Express + MongoDB.


Demonstração do Projeto (Visual):

Para facilitar a avaliação, o projeto inclui um vídeo demonstrando o funcionamento completo da interface.

O vídeo se encontra na pasta:
assets/video/mylibrary-demo.mp4

Finalidade do vídeo:
- Demonstrar o visual completo da aplicação;
- Exibir listagem, cadastro, edição, exclusão e detalhes das obras;
- Mostrar interação do usuário com cards, hover de imagem e navegação.


Funcionalidades Gerais:

- Catálogo de obras multimídia (livros, filmes e séries);
- Cadastro completo com título, tipo, autor/diretor, gênero, ano, avaliação e imagens;
- Troca de capa ao passar o mouse (hover);
- Edição de qualquer obra cadastrada;
- Exclusão com atualização imediata;
- Consumo da API via Axios;
- Organização em pastas e componentes reutilizáveis;
- Banco de dados utilizando MongoDB.


Tecnologias Utilizadas:

Front-end:
- React.js (Create React App)
- React Router DOM
- Axios
- React Hooks (useState, useEffect)
- CSS Modules

Back-end:
- Node.js
- Express.js
- MongoDB Compass
- Mongoose
- CORS
- Nodemon


Como Executar o Projeto Completo:

1. Clonar o repositório:
git clone <URL_DO_REPOSITORIO>

2. Executar o Back-end:
cd backend
npm install
npm run dev
A API ficará disponível em:
http://localhost:5000/obras

3. Executar o Front-end:
cd frontend
npm install
npm start
A aplicação ficará disponível em:
http://localhost:3000


Integração Front ↔ Back:

A comunicação entre React e API é feita via Axios utilizando:
http://localhost:5000/obras

Todo o CRUD do front-end utiliza estes endpoints:
- Listar
- Criar
- Editar
- Excluir


Estrutura Geral da Obra (Schema):

{
  titulo: String,
  tipo: "Livro" | "Filme" | "Série",
  autor: String,
  genero: String,
  ano: Number,
  status: String,
  avaliacao: String,
  imagem: String,
  hoverImagem: String,
  descricao: String
}


Documentação Específica:

O projeto contém documentação separada:
- README do Back-end → dentro da pasta backend/
- README do Front-end → dentro da pasta frontend/


Desenvolvido por:

Rafaella Costa Barbosa  
Disciplina: Linguagem de Programação para Internet – UNIUBE
