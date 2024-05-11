<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).



## prisma install
https://docs.nestjs.com/
https://docs.nestjs.com/recipes/prisma
npm install prisma --save-dev
npx prisma
npx prisma init
npx prisma migrate dev --name init

npm install @prisma/client


## prisma seed

https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding

npx prisma db seed 

## swagger

https://docs.nestjs.com/openapi/introduction

npm install --save @nestjs/swagger


http://localhost:3001/api



## graphql

https://zenn.dev/hakushun/articles/7daac74ae9af25

http://localhost:3001/graphql




# g は generate のエイリアス
# src/todo/todo.module.tsの作成
npx nest g module todo
# src/todo/todo.service.tsの作成
npx nest g service todo
# src/todo/todo.resolver.tsの作成
npx nest g resolver todo



## graphql + database

npm install typeorm --save

npm install reflect-metadata --save

npm install @types/node --save-dev


npm install mysql --save



npx nest generate resource recipes

https://zenn.dev/tatsuyasusukida/scraps/47c11dd47484c6




### request graphql

Resolver に@Query(() => [Todo], { name: 'todos' }) を追加することで query のname に対応する記載をするとリクエストできる。

https://zenn.dev/overflow_offers/articles/20220609-graphql-onboarding


```
query {
  todos {
    id,
    title,
    status,
    createdAt,
    updatedAt
  }
}
```


```
query {
  recipes {
    exampleField
  }
}
```

mutationはデータ更新のクエリ

```
mutation {
  createRecipe(createRecipeInput: {
    exampleField: 20,
  }) {
    exampleField
  }
}```

```
mutation {
  updateRecipe(updateRecipeInput: {
    id: 1,
    exampleField: 5
  }) {
    exampleField
  }
}
```


prisma studioというツールを使うことで、ブラウザからGUIベースでDBを直接操作することができます。

npx prisma studio