# Next.js starter

Next.js starter with predefined configurations for quickstart of a new project. Included in the starter are:

* [`styled-components`](https://styled-components.com/) with configured `babel-plugin-styled-components`
* [`typescript`](https://www.typescriptlang.org/),
* code style and linting guarded by `editorconfig`, `eslint` and `prettier`
* `husky` and `lint-staged` to run git hooks
* `browserlist` using defaults and excludes IE 11
* support to persistent layouts; see more [there](https://dev.to/ozanbolel/layout-persistence-in-next-js-107g)

## Requirements

* [Node.js](https://nodejs.org/en/) LTS release or greater

## Getting Started

Run the development server:

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

```bash
# Run the development server
$ npm run dev

# Run the development server in "debugger" mode
$ npm run dev:debug

# Build the production version
$ npm run build

# Run the production version of the build
$ npm run start

# Run the code style fixing with prettier
$ npm run format

# Run the code linting with eslint
$ npm run lint

# Run the typescript's type checking
$ npm run type-check
```

## Files structure

### components

The most common folder where are all components and sections used on page are placed.

### pages

For more informations, see the Next.js documentaction.

[https://nextjs.org/docs/basic-features/pages](https://nextjs.org/docs/basic-features/pages)

### public

For more informations, see the Next.js documentaction.

[https://nextjs.org/docs/basic-features/static-file-serving](https://nextjs.org/docs/basic-features/static-file-serving)

