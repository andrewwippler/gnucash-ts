import limiter from '@adonisjs/limiter/services/main'

export const globalLimiter = limiter.define('global', () => {
  return limiter.allowRequests(100).every('1 min')
})
