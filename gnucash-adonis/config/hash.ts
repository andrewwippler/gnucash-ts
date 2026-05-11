import env from '#start/env'
import { type InferHashers } from '@adonisjs/core/types'
import { defineConfig, drivers } from '@adonisjs/core/hash'

const hashConfig = defineConfig({
  default: env.get('HASH_DRIVER', 'scrypt') as 'scrypt' | 'argon' | 'bcrypt' | undefined,

  list: {
    scrypt: drivers.scrypt({
      cost: 16384,
      blockSize: 8,
      parallelization: 1,
      saltSize: 16,
      keyLength: 64,
      maxMemory: 32 * 1024 * 1024,
    }),

    argon: drivers.argon2({
      variant: 'id',
      iterations: 3,
      memory: 4096,
      parallelism: 1,
      saltSize: 16,
    }),

    bcrypt: drivers.bcrypt({
      rounds: 10,
    }),
  },
})

export default hashConfig

declare module '@adonisjs/core/types' {
  export interface HashersList extends InferHashers<typeof hashConfig> {}
}
