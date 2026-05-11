/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return { hello: 'world' }
})

router.resource('accounts', 'AccountsController')
    .only(['index', 'show']).apiOnly()

router.resource('billterms', 'BilltermsController')
    .only(['index', 'show']).apiOnly()

router.resource('books', 'BooksController')
    .only(['index', 'show']).apiOnly()

router.resource('budget-amounts', 'BudgetAmountsController')
    .only(['index', 'show']).apiOnly()

router.resource('budgets', 'BudgetsController')
    .only(['index', 'show']).apiOnly()

router.resource('commodities', 'CommoditiesController')
    .only(['index', 'show']).apiOnly()

router.resource('customers', 'CustomersController')
    .only(['index', 'show']).apiOnly()

router.resource('employees', 'EmployeesController')
    .only(['index', 'show']).apiOnly()

router.resource('entries', 'EntriesController')
    .only(['index', 'show']).apiOnly()

router.resource('gnclocks', 'GnclocksController')
    .only(['index']).apiOnly()

router.resource('invoices', 'InvoicesController')
    .only(['index', 'show']).apiOnly()

router.resource('jobs', 'JobsController')
    .only(['index', 'show']).apiOnly()

router.resource('lots', 'LotsController')
    .only(['index', 'show']).apiOnly()

router.resource('orders', 'OrdersController')
    .only(['index', 'show']).apiOnly()

router.resource('prices', 'PricesController')
    .only(['index', 'show']).apiOnly()

router.resource('recurrences', 'RecurrencesController')
    .only(['index', 'show']).apiOnly()

router.resource('schedxactions', 'SchedxactionsController')
    .only(['index', 'show']).apiOnly()

router.resource('slots', 'SlotsController')
    .only(['index', 'show']).apiOnly()

router.resource('splits', 'SplitsController')
    .only(['index', 'show']).apiOnly()

router.resource('taxtable-entries', 'TaxtableEntriesController')
    .only(['index', 'show']).apiOnly()

router.resource('taxtables', 'TaxtablesController')
    .only(['index', 'show']).apiOnly()

router.resource('transactions', 'TransactionsController')
    .only(['index', 'show']).apiOnly()

router.resource('vendors', 'VendorsController')
    .only(['index', 'show']).apiOnly()

router.resource('versions', 'VersionsController')
    .only(['index']).apiOnly()


