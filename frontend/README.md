MyLibrary - Catálogo Multimídia (Front-end)

Aplicação front-end desenvolvida em React para gerenciar um catálogo multimídia de livros, filmes e séries.
Permite cadastrar, listar, visualizar detalhes, editar e excluir obras, além de oferecer efeitos visuais como mudança de imagem no hover.


Funcionalidades:

Listagem:
- Exibe todas as obras cadastradas
- Cards com imagem, título, autor/diretor, categoria
- Troca de imagem no hover

Cadastro:
- Formulário completo
- Campos: título, tipo, autor/diretor, descrição, categoria, ano, status, avaliação, imagem e hoverImagem

Edição:
- Formulário pré-preenchido
- Permite atualizar qualquer informação

Detalhes:
- Exibe todas as informações da obra
- Botões de editar e voltar

Exclusão:
- Remove obra selecionada e atualiza lista


Recursos Utilizados:

- React (Create React App)
- React Router DOM
- Axios
- CSS Modules
- Componentes reutilizáveis
- Renderização condicional
- Lift State Up quando necessário


Estrutura do Projeto:

src/
├── components/
│   ├── Header/
│   ├── ObraCard/
│   └── ObraForm/
├── pages/
│   ├── AddEdit/
│   ├── Details/
│   └── Home/
├── services/
│   └── api.js
├── assets/
│   └── video/
│       └── mylibrary-demo.mp4   ← vídeo demonstrativo da interface
├── App.jsx
├── index.css
└── index.js


Vídeo Demonstrativo do Front-end:

O projeto inclui um vídeo no diretório:

assets/video/mylibrary-demo.mp4

O vídeo demonstra:
- Navegação entre telas
- Listagem de obras
- Hover na imagem dos cards
- Cadastro, edição e exclusão
- Layout completo da interface


Como Executar o Projeto:

1. Clonar o repositório:
git clone <URL_DO_REPOSITORIO>

2. Acessar a pasta:
cd frontend

3. Instalar dependências:
npm install

4. Executar:
npm start

A aplicação estará disponível em:
http://localhost:3000


Observação:

Este front-end consome a API Node + MongoDB localizada em:
http://localhost:5000/obras

A documentação da API está na pasta backend/.


Desenvolvido por:

Rafaella Costa Barbosa  
Disciplina: Linguagem de Programação para Internet – UNIUBE
