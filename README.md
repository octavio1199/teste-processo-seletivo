# Desafio Processo Seletivo - *Info Sistemas*

Este repositório contém o desafio do processo seletivo da Info-Sistemas.

## Pré-requisitos

Para rodar este projeto, será necessário:
1. Git;
2. Node.js;
3. npm;
4. Editor de texto (que suporte typescript).

## Estrutura do projeto

Este projeto foi estruturado para trabalhar com as camadas `routers`, `controllers`, `services`, `repositories` e `models`. Cada uma destas estruturas conta com uma pasta, dentro de `src`. As comunicações dessas camadas são feitas via interfaces, que estão descritas na pasta de `@types`, nas subpastas específicas para cada estrutura (ex.: interfaces de repositories em `@types/repositories`).

## Comandos de utilização do repositório
### Instalação do repositório
- Clonar o repositório: `git clone https://github.com/octavio1199/desafio-processo-seletivo.git`
- Mover para dentro da pasta do repositório: `cd desafio-processo-seletivo`
- Instalar os pacotes necessários para a execução da aplicação: `npm i` ou `npm install`

### Principais scripts
- Rodar a aplicação: `npm run dev`
- Migrations
  - Criar migration: `npm run typeorm:create:win <nome-da-migration>`
  - Rodar migration: `npm run typeorm:run:win`

## Principais pacotes

Os principais pacotes utilizados nesse projeto são:
- typescript;
- express;
- axios;
- dotenv;
- typeorm;
- typedi;
- http-status-codes.

Para o armazenamento de dados foi utilizado o banco MySQL.
