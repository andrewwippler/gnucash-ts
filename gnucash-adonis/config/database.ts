/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const databaseConfig = defineConfig({
  connection: env.get('DB_CONNECTION'),

  connections: {
    mysql: {
      client: 'mysql2',
      connection: {
        host: env.get('MYSQL_HOST'),
        port: env.get('MYSQL_PORT'),
        user: env.get('MYSQL_USER'),
        password: env.get('MYSQL_PASSWORD', ''),
        database: env.get('MYSQL_DB_NAME'),
      },
      migrations: {
        naturalSort: true,
      },
      debug: true,
    },

    pg: {
      client: 'pg',
      connection: {
        host: env.get('PG_HOST'),
        port: env.get('PG_PORT'),
        user: env.get('PG_USER'),
        password: env.get('PG_PASSWORD', ''),
        database: env.get('PG_DB_NAME'),
      },
      migrations: {
        naturalSort: true,
      },
      debug: true,
    },

    sqlite: {
      client: 'better-sqlite3',
      connection: {
        filename: env.get('SQLITE_PATH'),
      },
      useNullAsDefault: true,
      migrations: {
        naturalSort: true,
      },
      debug: true,
    },
  },
})

export default databaseConfig
