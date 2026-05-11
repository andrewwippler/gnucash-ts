# gnucash-ts — AGENTS.md

## Project structure

Monorepo with two packages:

- **`gnucash-adonis/`** — AdonisJS 5 TypeScript API. Read-only REST layer over an existing GnuCash MySQL database. All commands below assume `gnucash-adonis/` as cwd.
- **`database-typescript-helper/`** — Uses `@rmp135/sql-ts` to regenerate `Database.ts` type interfaces from a live MySQL GnuCash DB.

## Dev commands (run from `gnucash-adonis/`)

```sh
npm run dev            # node ace serve --watch
npm run build          # node ace build --production
npm run start          # node server.js (production)
npm run test           # node ace test (Japa runner, functional tests)
npm run lint           # eslint . --ext=.ts
npm run format         # prettier --write .
npm run test:coverage  # c8 npm run test
npm run coverage       # c8 check-coverage --lines 95 node ./test.ts && c8 report
```

## Database

- The app connects to an **existing GnuCash MySQL database** — Lucid does **not** own the schema. No `migration:run` at setup.
- `database/initial_schema.sql` documents the expected GnuCash 5.15 schema (informational only; actual schema comes from GnuCash).
- `database/Database.ts` contains auto-generated TypeScript interfaces (`sql-ts`); refresh via `database-typescript-helper/`.
- Models use `guid` (string) as primary key, not auto-increment integers.

## Architecture notes

- **Read-only API**: all controllers expose only `.only(['index', 'show']).apiOnly()`. The unused `create/store/edit/update/destroy` stubs exist in controllers but are dead code.
- **Rate limiting** via `@adonisjs/limiter` requires a running Redis (`docker-compose up`).
- **Tests**: Japa runner with `@japa/preset-adonis`. Only one functional test suite (`tests/functional/`). Uses `apiClient` for HTTP tests. `.env.test` (port 3334, separate DB credentials) is loaded at test time via `process.env.NODE_ENV = 'test'`.
- **Docker**: `docker-compose.yml` starts `mysql:8` + `redis:5-alpine`. `Dockerfile` is multi-stage (node:18-alpine).

## Code conventions

- **Prettier**: no semicolons, single quotes, trailingComma `es5`, printWidth 100, 2-space indent.
- **Lint**: ESLint with `plugin:adonis/typescriptApp` + `prettier` plugin (prettier violations are errors). Run `npm run format` before `npm run lint`.
- **EditorConfig**: 2-space indent, LF line endings, UTF-8.
- **Controllers**: pattern is paginated index (page query param, limit 50–500) + show by guid.

## Codegen

TypeScript DB interfaces in `database/Database.ts` are generated from the MySQL schema. To regenerate:
```sh
cd database-typescript-helper
npm i
npx @rmp135/sql-ts -c ./mysql.json
# copy output to ../gnucash-adonis/database/Database.ts
```

## Tests

```sh
cd gnucash-adonis
npm run test                           # all functional tests
npm run test -- --files='hello_world'  # single test file
```

Tests require a running MySQL + Redis (via `docker-compose up` from repo root) and a `testing` database configured per `.env.test`.
