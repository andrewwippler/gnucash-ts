/*
|--------------------------------------------------------------------------
| JavaScript entrypoint for running ace commands
|--------------------------------------------------------------------------
|
| Since, we cannot run TypeScript source code using "node" binary, we need
| a JavaScript entrypoint to run ace commands.
|
| This file registers the ts-exec hook with the Node.js module system
| and then imports the "bin/console.ts" file.
|
*/

import '@poppinss/ts-exec'

await import('./bin/console.js')
