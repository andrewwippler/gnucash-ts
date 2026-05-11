# GnuCash TypeScript API

Read-only REST API over a GnuCash database, built with [AdonisJS 7](https://adonisjs.com/). Supports **PostgreSQL**, **MySQL**, and **SQLite**.

The goal is to enable multi-currency scheduled transaction workflows and provide a backend for a mobile GnuCash companion app — without replacing the GnuCash GUI.

## Database Support

| Database | Status |
|---|---|
| PostgreSQL | Default |
| MySQL | Supported |
| SQLite | Supported (default in Docker) |

Set `DB_CONNECTION` to `pg`, `mysql`, or `sqlite` with the corresponding env vars.

## Quick Start

```sh
# Start PostgreSQL + Redis
docker compose up -d db redis

# Install, migrate, seed
cd gnucash-adonis
npm install
node ace migration:run
node ace db:seed

# Start dev server
npm run dev
```

Or with SQLite (no external deps):

```sh
DB_CONNECTION=sqlite SQLITE_PATH=tmp/gnucash.sqlite node ace migration:run
npm run dev
```

## Routes

All resources expose `GET /:resource` (paginated index) and `GET /:resource/:id` (show by guid). Two are index-only (gnclocks, versions).

```
GET  /                                  Health check
GET  /accounts                          Paginated list
GET  /accounts/:id                      Single account with commodity, children, lots, splits
GET  /billterms                         Paginated list
GET  /billterms/:id                     Single billterm
GET  /books                             Paginated list
GET  /books/:id                         Single book
GET  /budget-amounts                    Paginated list
GET  /budget-amounts/:id                Single budget amount with account + budget
GET  /budgets                           Paginated list
GET  /budgets/:id                       Single budget with budget amounts
GET  /commodities                       Paginated list
GET  /commodities/:id                   Single commodity with accounts, prices, transactions
GET  /customers                         Paginated list
GET  /customers/:id                     Single customer with currency, taxtable, terms
GET  /employees                         Paginated list
GET  /employees/:id                     Single employee with currency + ccard account
GET  /entries                           Paginated list
GET  /entries/:id                       Single entry with order, invoice, accounts, taxtables
GET  /gnclocks                          Paginated list (index only)
GET  /invoices                          Paginated list
GET  /invoices/:id                      Single invoice with currency, txn, lot, account, entries
GET  /jobs                              Paginated list
GET  /jobs/:id                          Single job
GET  /lots                              Paginated list
GET  /lots/:id                          Single lot with account + splits
GET  /orders                            Paginated list
GET  /orders/:id                        Single order with entries
GET  /prices                            Paginated list
GET  /prices/:id                        Single price with commodity + currency
GET  /recurrences                       Paginated list
GET  /recurrences/:id                   Single recurrence with schedxaction
GET  /schedxactions                     Paginated list
GET  /schedxactions/:id                 Single schedxaction with template account + recurrences
GET  /slots                             Paginated list
GET  /slots/:id                         Single slot
GET  /splits                            Paginated list
GET  /splits/:id                        Single split with account, transaction, lot
GET  /taxtable-entries                  Paginated list
GET  /taxtable-entries/:id              Single taxtable entry with taxtable + account
GET  /taxtables                         Paginated list
GET  /taxtables/:id                     Single taxtable with entries + parent
GET  /transactions                      Paginated list (ordered by post_date)
GET  /transactions/:id                  Single transaction with currency + splits (with accounts)
GET  /vendors                           Paginated list
GET  /vendors/:id                       Single vendor with currency, taxtable, terms
GET  /versions                          Paginated list (index only)
```

**Pagination**: query params `?page=1` (default 50 per page, transactions default 500).

## Database Schema

The schema is the standard GnuCash 5.1 schema. The app uses Lucid ORM models with full relationship mappings (see `app/Models/`). A schema-only reference is at `database/initial_schema.sql`.

Migrations for all 24 tables live in `database/migrations/` and work on PostgreSQL, MySQL, and SQLite. Run:

```sh
node ace migration:run
node ace db:seed
```

## Scripts

```sh
npm run dev              # node ace serve --watch
npm run build            # node ace build --production
npm run test             # node ace test (Japa, functional tests against PostgreSQL)
npm run lint             # eslint .
npm run format           # prettier --write .
```

## Tests

```sh
# Requires PostgreSQL + Redis
docker compose up -d db redis

# Run all tests
npm run test

# Single test file
npm run test -- --files='resources'
```

Tests use [Japa](https://japa.dev/) with `@japa/api-client`, Lucid factories, and run migrations on setup. Test config is in `.env.test` (connects to `testing` PG database).

## Docker

```sh
# Full stack (app + postgres + redis)
docker compose up --build

# Standalone app with SQLite
docker build -t gnucash-api gnucash-adonis/
docker run -e DB_CONNECTION=sqlite -e SQLITE_PATH=/data/gnucash.sqlite gnucash-api
```

## Architecture

- **Read-only**: controllers expose only `index`/`show`. Create/edit/update/destroy stubs exist but are dead code.
- **Rate limiting**: via `@adonisjs/limiter` (requires Redis).
- **Codegen**: TypeScript DB interfaces in `database/Database.ts` are generated from the live schema via `@rmp135/sql-ts` (see `database-typescript-helper/`).

## License

GPL v3
