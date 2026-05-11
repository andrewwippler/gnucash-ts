import type { InferConnections } from '@adonisjs/redis/types'
import type redisConfig from '../config/redis.js'

declare module '@adonisjs/redis/types' {
  interface RedisConnections extends InferConnections<typeof redisConfig> {}
}
