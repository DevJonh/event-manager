## Aplicação de Publicação de Eventos

Este projeto é uma aplicação de publicação de eventos desenvolvida no curso de React JS + Firebase + Bootstrap.
Aprendida no [curso](https://github.com/facebook/create-react-app) de React.

### O que faz essa aplicacão?

Esta aplicação foi desenvolvida com finalidade de estudos e possui as seguintes funcionalidades:

- [:key:] Autenticação de Usuários
- [:email:] Recuperação de senha com envio de e-mail automático
- [:bust_in_silhouette:] Cadastro de Usuários
- [:memo:] Publicar, editar, remover e pesquisar eventos para usuários logados.
- [:mag_right:] Pesquisa de eventos para usuários visitantes
- [:eyes:] Quantidade de Visualizações de um evento
- [:camera:] Upload de imagem
- [:calling:] Layout responsivo (se ajusta ao tamanho da tela)

### Lembrete - 01:

Para o funcionamento esperado, você precisará primeiramente criar a sua base de dados/cloud firestone e sua storage, em seguida modificar o arquivo de configuração do firebase que se encontra em **"src/config/firebase.js"** com as informações da sua base de dados.

Para saber mais - [clique aqui](https://firebase.google.com/docs/web/setup?authuser=0#using-module-bundlers)

### Lembrete - 02:

A pasta node_modules não é enviada para o Github. Por isso, ao fazer download ou clone deste código fonte, lembre-se de abrir a pasta do projeto no terminal e executar o seguinte comando:

```console
yarn
```

E pronto, a pasta node_modules será gerada com os modulos que o projeto utilizar.

### Iniciar a aplicacão:

Para rodar a aplicação, execute o comando: <br>

```console
yarn start
```

Em seguida, será aberto o endereço [http://localhost:3000](http://localhost:3000) em seu navegador.
