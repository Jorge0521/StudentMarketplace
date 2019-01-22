# Fullstack Prisma and React Template

## Repo

```
├── client (CRA Apollo Frontend Directory )
│   ├── package.json
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── apollo-client.js
│   │   ├── components
│   │   │   └── ListItem.js
│   │   ├── index.js
│   │   ├── styles.css
│   │   └── views
│   │   └── BasicList.js
│   └── yarn.lock
├── server (Prisma Typescript Template )
│   ├── README.md
│   ├── database
│   │   ├── datamodel
│   │   │   ├── enums.graphql (enums here)
│   │   │   └── types.graphql (database types here)
│   │   ├── prisma.yml
│   │   └── seed.graphql
│   ├── package.json
│   ├── src
│   │   ├── generated
│   │   │   ├── prisma.graphql
│   │   │   └── prisma.ts
│   │   ├── index.ts
│   │   ├── resolvers
│   │   │   ├── Query.ts
│   │   │   └── index.ts
│   │   ├── schema.graphql
│   │   └── utils
│   │   ├── MergeSchemaHelper.ts
│   │   ├── getContext.ts
│   │   └── getUser.ts
```

## Get Started

```sh
yarn install
```

_to work on Graphql_

```
cd server
```

_to work on React_

```
cd client
```

### Server

> Rename `.env.sample` to `.env`

> Create a new PRISMA_SECRET

```env
#i.e PRISMA_SECRET="mysuppersecretpassc0de"
PRISMA_SECRET="Your_Secret_Here"

```

> Create your datamodel under `database/datamodel`
>
> - `enums.graphql` used for **Enums**
> - `types.graphql` used for **Database** objects

> After configuring your datamodel

```sh
yarn prisma deploy
```

> Select Demo Server _may prompt a login_

> Enter all necessary info i.e project name, stage, and such

START HACKING! 🎊 🎉 🎊 😎
