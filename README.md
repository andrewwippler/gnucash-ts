# GnuCash TypeScript API

Here is an AdonisJS application that can point to a MySQL (tested), PostgreSQL (untested), or SQLite3 (untested) GnuCash database.

Currently, This is a READ ONLY API. I am not intending to replace the GUI of GnuCash.

These days, I find myself working with two currencies (USD and EUR). I want to extend the scheduled transactions to work across currencies, and this is the only way I know how to do it. Theoretically, one can make a mobile app to connect to this API and one could have GNUCash on their mobile device.

## Work In Progress

- [] Finish connecting database relationships
- [] Tests and sample data
- [] Docker container build process
- [] SQLite support (and default in the Docker container)

## Routes

```
GET|HEAD    /uploads/* ───────────────────────────────────────── drive.local.serve › Closure
GET|HEAD    / ────────────────────────────────────────────────────────────────────── Closure
GET|HEAD    /accounts ──────────────────────────── accounts.index › AccountsController.index
GET|HEAD    /accounts/:id ────────────────────────── accounts.show › AccountsController.show
GET|HEAD    /billterms ───────────────────────── billterms.index › BilltermsController.index
GET|HEAD    /billterms/:id ─────────────────────── billterms.show › BilltermsController.show
GET|HEAD    /books ───────────────────────────────────── books.index › BooksController.index
GET|HEAD    /books/:id ─────────────────────────────────── books.show › BooksController.show
GET|HEAD    /budget-amounts ─────────── budget_amounts.index › BudgetAmountsController.index
GET|HEAD    /budget-amounts/:id ───────── budget_amounts.show › BudgetAmountsController.show
GET|HEAD    /budgets ─────────────────────────────── budgets.index › BudgetsController.index
GET|HEAD    /budgets/:id ───────────────────────────── budgets.show › BudgetsController.show
GET|HEAD    /commodities ─────────────────── commodities.index › CommoditiesController.index
GET|HEAD    /commodities/:id ───────────────── commodities.show › CommoditiesController.show
GET|HEAD    /customers ───────────────────────── customers.index › CustomersController.index
GET|HEAD    /customers/:id ─────────────────────── customers.show › CustomersController.show
GET|HEAD    /employees ───────────────────────── employees.index › EmployeesController.index
GET|HEAD    /employees/:id ─────────────────────── employees.show › EmployeesController.show
GET|HEAD    /entries ─────────────────────────────── entries.index › EntriesController.index
GET|HEAD    /entries/:id ───────────────────────────── entries.show › EntriesController.show
GET|HEAD    /gnclocks ──────────────────────────── gnclocks.index › GnclocksController.index
GET|HEAD    /invoices ──────────────────────────── invoices.index › InvoicesController.index
GET|HEAD    /invoices/:id ────────────────────────── invoices.show › InvoicesController.show
GET|HEAD    /jobs ──────────────────────────────────────── jobs.index › JobsController.index
GET|HEAD    /jobs/:id ────────────────────────────────────── jobs.show › JobsController.show
GET|HEAD    /lots ──────────────────────────────────────── lots.index › LotsController.index
GET|HEAD    /lots/:id ────────────────────────────────────── lots.show › LotsController.show
GET|HEAD    /orders ────────────────────────────────── orders.index › OrdersController.index
GET|HEAD    /orders/:id ──────────────────────────────── orders.show › OrdersController.show
GET|HEAD    /prices ────────────────────────────────── prices.index › PricesController.index
GET|HEAD    /prices/:id ──────────────────────────────── prices.show › PricesController.show
GET|HEAD    /recurrences ─────────────────── recurrences.index › RecurrencesController.index
GET|HEAD    /recurrences/:id ───────────────── recurrences.show › RecurrencesController.show
GET|HEAD    /schedxactions ───────────── schedxactions.index › SchedxactionsController.index
GET|HEAD    /schedxactions/:id ─────────── schedxactions.show › SchedxactionsController.show
GET|HEAD    /slots ───────────────────────────────────── slots.index › SlotsController.index
GET|HEAD    /slots/:id ─────────────────────────────────── slots.show › SlotsController.show
GET|HEAD    /splits ────────────────────────────────── splits.index › SplitsController.index
GET|HEAD    /splits/:id ──────────────────────────────── splits.show › SplitsController.show
GET|HEAD    /taxtable-entries ───── taxtable_entries.index › TaxtableEntriesController.index
GET|HEAD    /taxtable-entries/:id ─── taxtable_entries.show › TaxtableEntriesController.show
GET|HEAD    /taxtables ───────────────────────── taxtables.index › TaxtablesController.index
GET|HEAD    /taxtables/:id ─────────────────────── taxtables.show › TaxtablesController.show
GET|HEAD    /transactions ──────────────── transactions.index › TransactionsController.index
GET|HEAD    /transactions/:id ────────────── transactions.show › TransactionsController.show
GET|HEAD    /vendors ─────────────────────────────── vendors.index › VendorsController.index
GET|HEAD    /vendors/:id ───────────────────────────── vendors.show › VendorsController.show
GET|HEAD    /versions ──────────────────────────── versions.index › VersionsController.index
```

## License

GPL v3
