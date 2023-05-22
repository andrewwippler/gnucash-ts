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

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('accounts', 'AccountsController')
    .only(['index', 'show']).apiOnly()

Route.resource('billterms', 'BilltermsController')
    .only(['index', 'show']).apiOnly()

Route.resource('books', 'BooksController')
    .only(['index', 'show']).apiOnly()

Route.resource('budget-amounts', 'BudgetAmountsController')
    .only(['index', 'show']).apiOnly()

Route.resource('budgets', 'BudgetsController')
    .only(['index', 'show']).apiOnly()

Route.resource('commoditys', 'CommoditysController')
    .only(['index', 'show']).apiOnly()

Route.resource('customers', 'CustomersController')
    .only(['index', 'show']).apiOnly()

Route.resource('employees', 'EmployeesController')
    .only(['index', 'show']).apiOnly()

Route.resource('entrys', 'EntrysController')
    .only(['index', 'show']).apiOnly()

Route.resource('gnclocks', 'GnclocksController')
    .only(['index']).apiOnly()

Route.resource('invoices', 'InvoicesController')
    .only(['index', 'show']).apiOnly()

Route.resource('jobs', 'JobsController')
    .only(['index', 'show']).apiOnly()

Route.resource('lots', 'LotsController')
    .only(['index', 'show']).apiOnly()

Route.resource('orders', 'OrdersController')
    .only(['index', 'show']).apiOnly()

Route.resource('prices', 'PricesController')
    .only(['index', 'show']).apiOnly()

Route.resource('recurrences', 'RecurrencesController')
    .only(['index', 'show']).apiOnly()

Route.resource('schedxactions', 'SchedxactionsController')
    .only(['index', 'show']).apiOnly()

Route.resource('slots', 'SlotsController')
    .only(['index', 'show']).apiOnly()

Route.resource('splits', 'SplitsController')
    .only(['index', 'show']).apiOnly()

Route.resource('taxtable-entrys', 'TaxtableEntrysController')
    .only(['index', 'show']).apiOnly()

Route.resource('taxtables', 'TaxtablesController')
    .only(['index', 'show']).apiOnly()

Route.resource('transactions', 'TransactionsController')
    .only(['index', 'show']).apiOnly()

Route.resource('vendors', 'VendorsController')
    .only(['index', 'show']).apiOnly()

Route.resource('versions', 'VersionsController')
    .only(['index']).apiOnly()


