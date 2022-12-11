<!-- PROJECT TITLE -->
  <h1 align="center">App Name</h1>
 <h2 2 align="center">
    tagline...
    <br />
    </h2>

## Application Description

application backend

## Table of Contents

<details>
<summary>App Name</summary>

- [Table of Contents](#table-of-contents)
- [Requirements](#requirements)
- [Running](#running)
- [SQLite Path](#sqlight-path)
- [Data Migration](#data-migration)
- [API](#api)

</details>

## Requirements

- [Node.js](https://nodejs.org/) >= 12.x
- [SQLite](https://www.sqlite.org/index.html)

<br />

## How to run backend server

**Step #1** - Clone the project

```bash
$ git clone https://github.com/app name...backend
$ cd api-server-nodejs
```

**Step #2** - Install dependencies via NPM or Yarn

```bash
$ npm i
// OR
$ yarn
```

**Step #3** - Run the SQLite migration via TypeORM

```bash
$ npm run typeorm migration:run
// OR
$ yarn typeorm migration:run
```

**Step #4** - Start the API server (development mode)

```bash
$ npm dev
// OR
$ yarn dev
```

**Step #5** - Production Build (files generated in `build` directory)

```bash
$ npm build
// OR
$ yarn build
```

**Step #6** - Start the API server for production (files served from `build/index.js`)

```bash
$ npm start
// OR
$ yarn start
```

