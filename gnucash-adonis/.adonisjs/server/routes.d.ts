import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'accounts.index': { paramsTuple?: []; params?: {} }
    'accounts.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'billterms.index': { paramsTuple?: []; params?: {} }
    'billterms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.index': { paramsTuple?: []; params?: {} }
    'books.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'budget_amounts.index': { paramsTuple?: []; params?: {} }
    'budget_amounts.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'budgets.index': { paramsTuple?: []; params?: {} }
    'budgets.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commodities.index': { paramsTuple?: []; params?: {} }
    'commodities.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'customers.index': { paramsTuple?: []; params?: {} }
    'customers.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'employees.index': { paramsTuple?: []; params?: {} }
    'employees.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'entries.index': { paramsTuple?: []; params?: {} }
    'entries.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'gnclocks.index': { paramsTuple?: []; params?: {} }
    'invoices.index': { paramsTuple?: []; params?: {} }
    'invoices.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'jobs.index': { paramsTuple?: []; params?: {} }
    'jobs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'lots.index': { paramsTuple?: []; params?: {} }
    'lots.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'orders.index': { paramsTuple?: []; params?: {} }
    'orders.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'prices.index': { paramsTuple?: []; params?: {} }
    'prices.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recurrences.index': { paramsTuple?: []; params?: {} }
    'recurrences.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'schedxactions.index': { paramsTuple?: []; params?: {} }
    'schedxactions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slots.index': { paramsTuple?: []; params?: {} }
    'slots.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'splits.index': { paramsTuple?: []; params?: {} }
    'splits.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'taxtable_entries.index': { paramsTuple?: []; params?: {} }
    'taxtable_entries.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'taxtables.index': { paramsTuple?: []; params?: {} }
    'taxtables.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'transactions.index': { paramsTuple?: []; params?: {} }
    'transactions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'vendors.index': { paramsTuple?: []; params?: {} }
    'vendors.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'versions.index': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'accounts.index': { paramsTuple?: []; params?: {} }
    'accounts.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'billterms.index': { paramsTuple?: []; params?: {} }
    'billterms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.index': { paramsTuple?: []; params?: {} }
    'books.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'budget_amounts.index': { paramsTuple?: []; params?: {} }
    'budget_amounts.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'budgets.index': { paramsTuple?: []; params?: {} }
    'budgets.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commodities.index': { paramsTuple?: []; params?: {} }
    'commodities.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'customers.index': { paramsTuple?: []; params?: {} }
    'customers.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'employees.index': { paramsTuple?: []; params?: {} }
    'employees.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'entries.index': { paramsTuple?: []; params?: {} }
    'entries.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'gnclocks.index': { paramsTuple?: []; params?: {} }
    'invoices.index': { paramsTuple?: []; params?: {} }
    'invoices.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'jobs.index': { paramsTuple?: []; params?: {} }
    'jobs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'lots.index': { paramsTuple?: []; params?: {} }
    'lots.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'orders.index': { paramsTuple?: []; params?: {} }
    'orders.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'prices.index': { paramsTuple?: []; params?: {} }
    'prices.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recurrences.index': { paramsTuple?: []; params?: {} }
    'recurrences.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'schedxactions.index': { paramsTuple?: []; params?: {} }
    'schedxactions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slots.index': { paramsTuple?: []; params?: {} }
    'slots.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'splits.index': { paramsTuple?: []; params?: {} }
    'splits.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'taxtable_entries.index': { paramsTuple?: []; params?: {} }
    'taxtable_entries.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'taxtables.index': { paramsTuple?: []; params?: {} }
    'taxtables.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'transactions.index': { paramsTuple?: []; params?: {} }
    'transactions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'vendors.index': { paramsTuple?: []; params?: {} }
    'vendors.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'versions.index': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'accounts.index': { paramsTuple?: []; params?: {} }
    'accounts.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'billterms.index': { paramsTuple?: []; params?: {} }
    'billterms.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'books.index': { paramsTuple?: []; params?: {} }
    'books.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'budget_amounts.index': { paramsTuple?: []; params?: {} }
    'budget_amounts.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'budgets.index': { paramsTuple?: []; params?: {} }
    'budgets.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'commodities.index': { paramsTuple?: []; params?: {} }
    'commodities.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'customers.index': { paramsTuple?: []; params?: {} }
    'customers.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'employees.index': { paramsTuple?: []; params?: {} }
    'employees.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'entries.index': { paramsTuple?: []; params?: {} }
    'entries.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'gnclocks.index': { paramsTuple?: []; params?: {} }
    'invoices.index': { paramsTuple?: []; params?: {} }
    'invoices.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'jobs.index': { paramsTuple?: []; params?: {} }
    'jobs.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'lots.index': { paramsTuple?: []; params?: {} }
    'lots.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'orders.index': { paramsTuple?: []; params?: {} }
    'orders.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'prices.index': { paramsTuple?: []; params?: {} }
    'prices.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'recurrences.index': { paramsTuple?: []; params?: {} }
    'recurrences.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'schedxactions.index': { paramsTuple?: []; params?: {} }
    'schedxactions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'slots.index': { paramsTuple?: []; params?: {} }
    'slots.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'splits.index': { paramsTuple?: []; params?: {} }
    'splits.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'taxtable_entries.index': { paramsTuple?: []; params?: {} }
    'taxtable_entries.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'taxtables.index': { paramsTuple?: []; params?: {} }
    'taxtables.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'transactions.index': { paramsTuple?: []; params?: {} }
    'transactions.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'vendors.index': { paramsTuple?: []; params?: {} }
    'vendors.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'versions.index': { paramsTuple?: []; params?: {} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}