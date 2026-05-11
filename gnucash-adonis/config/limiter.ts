import { defineConfig, stores } from '@adonisjs/limiter'

export default defineConfig({
  default: 'redis',

  stores: {
    redis: stores.redis({
      connectionName: 'local',
    }),
  },
})
