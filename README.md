# Viagem.com

Projeto Integrador da Digital House - Curso Desenvolvimento Web Fullstack.<br>
Figma com o Layout do projeto - https://www.figma.com/file/TUDwPfTPCZIsY33zZZQWWD/Projeto-Integrador-DH-team-library
<br><br>
![Imagem do Projeto - Viagem.com](https://raw.githubusercontent.com/jeffersonhfr/ProjetoIntegrador-DH/main/server/public/assets/img/thumb_projeto.jpg)
<br><br>
Para visualizar o nosso projeto, basta seguir os passos abaixo.<br>
<br>

## Configuração Inicial

```sh
# Clonando o repositório
git clone https://github.com/jeffersonhfr/ProjetoIntegrador-DH.git

# Acessando a pasta criada pelo express generator
cd server

# Instalando as dependências
npm install
```

<br>
### Crie um Banco de dados MYSQL com nome: <br>

viagem_com<br>
<br>
Em seguida rode os comandos no terminal:<br>
npx sequelize-cli db:migrate<br>
npx sequelize-cli db:seed:all
<br>
<br><br>

## Levantando o servidor

Na pasta `server` executar o comando via terminal <br>

```sh
npm start
```

Depois basta abrir o navegador no endereço:
http://localhost:3000/
