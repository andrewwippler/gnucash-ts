import proxyAddr from 'proxy-addr'
import env from '#start/env'
import { defineConfig } from '@adonisjs/core/http'

export const appKey: string = env.get('APP_KEY')

export const http = defineConfig({
  allowMethodSpoofing: false,

  subdomainOffset: 2,

  generateRequestId: false,

  trustProxy: proxyAddr.compile('loopback'),

  etag: false,

  jsonpCallbackName: 'callback',

  cookie: {
    domain: '',
    path: '/',
    maxAge: '2h',
    httpOnly: true,
    secure: false,
    sameSite: false,
  },
})
