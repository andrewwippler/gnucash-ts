import { test } from '@japa/runner'
import {
  AccountFactory,
  TransactionFactory,
  SplitFactory,
  CommodityFactory,
  BudgetFactory,
  BudgetAmountFactory,
  CustomerFactory,
  InvoiceFactory,
  EntryFactory,
  VendorFactory,
  LotFactory,
  PriceFactory,
  TaxtableFactory,
  TaxtableEntryFactory,
  SchedxactionFactory,
  RecurrenceFactory,
  OrderFactory,
  EmployeeFactory,
  JobFactory,
  BilltermFactory,
  BookFactory,
  VersionFactory,
} from '#database/factories/index'
import Gnclock from '#app/Models/Gnclock'
import Slot from '#app/Models/Slot'

test.group('API resources', () => {
  test('GET / returns welcome message', async ({ client }) => {
    const response = await client.get('/')
    response.assertStatus(200)
    response.assertBodyContains({ hello: 'world' })
  })

  test('GET /accounts - paginated index', async ({ client }) => {
    await AccountFactory.merge({ commodity_guid: null }).createMany(3)
    const response = await client.get('/accounts')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /accounts/:id - show by guid', async ({ client }) => {
    const account = await AccountFactory.merge({ commodity_guid: null }).create()
    const response = await client.get(`/accounts/${account.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: account.guid })
  })

  test('GET /accounts/:id - 404 for nonexistent guid', async ({ client }) => {
    const response = await client.get('/accounts/nonexistent00000000000000000000')
    response.assertStatus(404)
  })

  test('GET /transactions - paginated index', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    await TransactionFactory.merge({ currency_guid: commodity.guid }).createMany(3)
    const response = await client.get('/transactions')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /transactions/:id - show by guid with preloaded splits', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    const account = await AccountFactory.merge({ commodity_guid: null }).create()
    const transaction = await TransactionFactory.merge({ currency_guid: commodity.guid }).create()
    await SplitFactory.merge({
      tx_guid: transaction.guid,
      account_guid: account.guid,
    }).create()
    const response = await client.get(`/transactions/${transaction.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: transaction.guid })
  })

  test('GET /splits - paginated index', async ({ client }) => {
    const account = await AccountFactory.merge({ commodity_guid: null }).create()
    const commodity = await CommodityFactory.create()
    const transaction = await TransactionFactory.merge({ currency_guid: commodity.guid }).create()
    await SplitFactory.merge({
      tx_guid: transaction.guid,
      account_guid: account.guid,
    }).createMany(3)
    const response = await client.get('/splits')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /splits/:id - show by guid', async ({ client }) => {
    const account = await AccountFactory.merge({ commodity_guid: null }).create()
    const commodity = await CommodityFactory.create()
    const transaction = await TransactionFactory.merge({ currency_guid: commodity.guid }).create()
    const split = await SplitFactory.merge({
      tx_guid: transaction.guid,
      account_guid: account.guid,
    }).create()
    const response = await client.get(`/splits/${split.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: split.guid })
  })

  test('GET /commodities - paginated index', async ({ client }) => {
    await CommodityFactory.createMany(3)
    const response = await client.get('/commodities')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /commodities/:id - show by guid', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    const response = await client.get(`/commodities/${commodity.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: commodity.guid })
  })

  test('GET /budgets - paginated index', async ({ client }) => {
    await BudgetFactory.createMany(3)
    const response = await client.get('/budgets')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /budgets/:id - show by guid', async ({ client }) => {
    const budget = await BudgetFactory.create()
    const response = await client.get(`/budgets/${budget.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: budget.guid })
  })

  test('GET /budget-amounts - paginated index', async ({ client }) => {
    const account = await AccountFactory.merge({ commodity_guid: null }).create()
    const budget = await BudgetFactory.create()
    await BudgetAmountFactory.merge({
      account_guid: account.guid,
      budget_guid: budget.guid,
    }).createMany(3)
    const response = await client.get('/budget-amounts')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /billterms - paginated index', async ({ client }) => {
    await BilltermFactory.createMany(3)
    const response = await client.get('/billterms')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /billterms/:id - show by guid', async ({ client }) => {
    const billterm = await BilltermFactory.create()
    const response = await client.get(`/billterms/${billterm.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: billterm.guid })
  })

  test('GET /taxtables - paginated index', async ({ client }) => {
    await TaxtableFactory.createMany(3)
    const response = await client.get('/taxtables')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /taxtables/:id - show by guid', async ({ client }) => {
    const taxtable = await TaxtableFactory.create()
    const response = await client.get(`/taxtables/${taxtable.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: taxtable.guid })
  })

  test('GET /taxtable-entries - paginated index', async ({ client }) => {
    const taxtable = await TaxtableFactory.create()
    const account = await AccountFactory.merge({ commodity_guid: null }).create()
    await TaxtableEntryFactory.merge({
      taxtable: taxtable.guid,
      account: account.guid,
    }).createMany(3)
    const response = await client.get('/taxtable-entries')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /customers - paginated index', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    await CustomerFactory.merge({ currency: commodity.guid }).createMany(3)
    const response = await client.get('/customers')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /customers/:id - show by guid', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    const customer = await CustomerFactory.merge({ currency: commodity.guid }).create()
    const response = await client.get(`/customers/${customer.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: customer.guid })
  })

  test('GET /vendors - paginated index', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    await VendorFactory.merge({ currency: commodity.guid }).createMany(3)
    const response = await client.get('/vendors')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /vendors/:id - show by guid', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    const vendor = await VendorFactory.merge({ currency: commodity.guid }).create()
    const response = await client.get(`/vendors/${vendor.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: vendor.guid })
  })

  test('GET /employees - paginated index', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    await EmployeeFactory.merge({ currency: commodity.guid }).createMany(3)
    const response = await client.get('/employees')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /employees/:id - show by guid', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    const employee = await EmployeeFactory.merge({ currency: commodity.guid }).create()
    const response = await client.get(`/employees/${employee.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: employee.guid })
  })

  test('GET /invoices - paginated index', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    await InvoiceFactory.merge({ currency: commodity.guid }).createMany(3)
    const response = await client.get('/invoices')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /invoices/:id - show by guid', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    const invoice = await InvoiceFactory.merge({ currency: commodity.guid }).create()
    const response = await client.get(`/invoices/${invoice.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: invoice.guid })
  })

  test('GET /entries - paginated index', async ({ client }) => {
    await EntryFactory.createMany(3)
    const response = await client.get('/entries')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /entries/:id - show by guid', async ({ client }) => {
    const entry = await EntryFactory.create()
    const response = await client.get(`/entries/${entry.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: entry.guid })
  })

  test('GET /orders - paginated index', async ({ client }) => {
    await OrderFactory.createMany(3)
    const response = await client.get('/orders')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /orders/:id - show by guid', async ({ client }) => {
    const order = await OrderFactory.create()
    const response = await client.get(`/orders/${order.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: order.guid })
  })

  test('GET /jobs - paginated index', async ({ client }) => {
    await JobFactory.createMany(3)
    const response = await client.get('/jobs')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /jobs/:id - show by guid', async ({ client }) => {
    const job = await JobFactory.create()
    const response = await client.get(`/jobs/${job.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: job.guid })
  })

  test('GET /lots - paginated index', async ({ client }) => {
    await LotFactory.createMany(3)
    const response = await client.get('/lots')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /lots/:id - show by guid', async ({ client }) => {
    const lot = await LotFactory.create()
    const response = await client.get(`/lots/${lot.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: lot.guid })
  })

  test('GET /prices - paginated index', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    await PriceFactory.merge({
      commodity_guid: commodity.guid,
      currency_guid: commodity.guid,
    }).createMany(3)
    const response = await client.get('/prices')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /prices/:id - show by guid', async ({ client }) => {
    const commodity = await CommodityFactory.create()
    const price = await PriceFactory.merge({
      commodity_guid: commodity.guid,
      currency_guid: commodity.guid,
    }).create()
    const response = await client.get(`/prices/${price.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: price.guid })
  })

  test('GET /schedxactions - paginated index', async ({ client }) => {
    const account = await AccountFactory.merge({ commodity_guid: null }).create()
    await SchedxactionFactory.merge({ template_act_guid: account.guid }).createMany(3)
    const response = await client.get('/schedxactions')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /schedxactions/:id - show by guid', async ({ client }) => {
    const account = await AccountFactory.merge({ commodity_guid: null }).create()
    const schedxaction = await SchedxactionFactory.merge({
      template_act_guid: account.guid,
    }).create()
    const response = await client.get(`/schedxactions/${schedxaction.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: schedxaction.guid })
  })

  test('GET /recurrences - paginated index', async ({ client }) => {
    const recurAccount = await AccountFactory.merge({ commodity_guid: null }).create()
    const schedxaction = await SchedxactionFactory.merge({
      template_act_guid: recurAccount.guid,
    }).create()
    await RecurrenceFactory.merge({ obj_guid: schedxaction.guid }).createMany(3)
    const response = await client.get('/recurrences')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /books - paginated index', async ({ client }) => {
    await BookFactory.createMany(3)
    const response = await client.get('/books')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 3 } })
  })

  test('GET /books/:id - show by guid', async ({ client }) => {
    const book = await BookFactory.create()
    const response = await client.get(`/books/${book.guid}`)
    response.assertStatus(200)
    response.assertBodyContains({ guid: book.guid })
  })

  test('GET /gnclocks - index only', async ({ client }) => {
    await Gnclock.create({ Hostname: 'test', PID: 123 })
    const response = await client.get('/gnclocks')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 1 } })
  })

  test('GET /versions - index only', async ({ client }) => {
    await VersionFactory.create()
    const response = await client.get('/versions')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 1 } })
  })

  test('GET /slots - paginated index', async ({ client }) => {
    const account = await AccountFactory.merge({ commodity_guid: null }).create()
    await Slot.create({
      obj_guid: account.guid,
      name: 'test-slot',
      slot_type: 0,
    })
    const response = await client.get('/slots')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { total: 1 } })
  })

  test('pagination respects page parameter', async ({ client }) => {
    const response = await client.get('/accounts?page=1')
    response.assertStatus(200)
    response.assertBodyContains({ meta: { currentPage: 1 } })
  })

  test('show returns 404 for nonexistent guid across resources', async ({ client }) => {
    const responses = await Promise.all([
      client.get('/customers/nonexistent00000000000000000000'),
      client.get('/vendors/nonexistent00000000000000000000'),
      client.get('/invoices/nonexistent00000000000000000000'),
      client.get('/transactions/nonexistent00000000000000000000'),
    ])
    for (const response of responses) {
      response.assertStatus(404)
    }
  })
})
