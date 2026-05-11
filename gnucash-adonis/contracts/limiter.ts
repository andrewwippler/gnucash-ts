import type { LimiterManagerStoreFactory } from '@adonisjs/limiter/types'

type ResolvedStores = {
  redis: LimiterManagerStoreFactory
}

declare module '@adonisjs/limiter/types' {
  interface LimitersList extends ResolvedStores {}
}
