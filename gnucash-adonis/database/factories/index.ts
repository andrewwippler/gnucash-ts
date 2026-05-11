import { DateTime } from 'luxon'
import factory from '@adonisjs/lucid/factories'
import Account from '#app/Models/Account'
import Transaction from '#app/Models/Transaction'
import Split from '#app/Models/Split'
import Commodity from '#app/Models/Commodity'
import Budget from '#app/Models/Budget'
import BudgetAmount from '#app/Models/BudgetAmount'
import Customer from '#app/Models/Customer'
import Invoice from '#app/Models/Invoice'
import Entry from '#app/Models/Entry'
import Vendor from '#app/Models/Vendor'
import Lot from '#app/Models/Lot'
import Price from '#app/Models/Price'
import Taxtable from '#app/Models/Taxtable'
import TaxtableEntry from '#app/Models/TaxtableEntry'
import Schedxaction from '#app/Models/Schedxaction'
import Recurrence from '#app/Models/Recurrence'
import Order from '#app/Models/Order'
import Employee from '#app/Models/Employee'
import Job from '#app/Models/Job'
import Billterm from '#app/Models/Billterm'
import Book from '#app/Models/Book'
import Version from '#app/Models/Version'

export const CommodityFactory = factory
  .define(Commodity, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    namespace: 'ISO4217',
    mnemonic: 'USD',
    fullname: 'US Dollar',
    cusip: '',
    fraction: 100,
    quote_flag: 0,
    quote_source: null,
    quote_tz: null,
  }))
  .build()

export const AccountFactory = factory
  .define(Account, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    name: faker.finance.accountName(),
    account_type: 'BANK',
    commodity_scu: 100,
    non_std_scu: 0,
    commodity_guid: null,
    parent_guid: null,
    code: null,
    description: null,
    hidden: 0,
    placeholder: 0,
  }))
  .build()

export const TransactionFactory = factory
  .define(Transaction, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    currency_guid: '',
    description: faker.finance.transactionDescription(),
    num: faker.string.alphanumeric(5),
    post_date: DateTime.fromJSDate(faker.date.recent()),
    enter_date: DateTime.fromJSDate(faker.date.recent()),
  }))
  .build()

export const SplitFactory = factory
  .define(Split, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    tx_guid: '',
    account_guid: '',
    memo: '',
    action: '',
    reconcile_state: 'n',
    value_num: '1000',
    value_denom: '100',
    quantity_num: '1000',
    quantity_denom: '100',
    lot_guid: null,
    reconcile_date: null,
  }))
  .build()

export const BudgetFactory = factory
  .define(Budget, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    name: faker.finance.accountName(),
    description: null,
    num_periods: 12,
  }))
  .build()

export const BudgetAmountFactory = factory
  .define(BudgetAmount, async () => ({
    account_guid: '',
    budget_guid: '',
    period_num: 1,
    amount_num: '100000',
    amount_denom: '100',
  }))
  .build()

export const CustomerFactory = factory
  .define(Customer, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    name: faker.company.name(),
    id: faker.string.alphanumeric(8),
    notes: '',
    active: 1,
    discount_num: '0',
    discount_denom: '1',
    credit_num: '0',
    credit_denom: '1',
    currency: '',
    tax_override: 0,
  }))
  .build()

export const InvoiceFactory = factory
  .define(Invoice, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    id: faker.string.alphanumeric(8),
    notes: '',
    active: 1,
    currency: '',
    date_opened: DateTime.fromJSDate(faker.date.recent()),
    date_posted: null,
    owner_type: null,
    owner_guid: null,
    terms: null,
    billing_id: null,
    post_txn: null,
    post_lot: null,
    post_acc: null,
    billto_type: null,
    billto_guid: null,
    charge_amt_num: null,
    charge_amt_denom: null,
  }))
  .build()

export const EntryFactory = factory
  .define(Entry, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    date: DateTime.fromJSDate(faker.date.recent()),
    date_entered: DateTime.fromJSDate(faker.date.recent()),
    description: null,
    action: null,
    notes: null,
    quantity_num: null,
    quantity_denom: null,
    invoice: null,
    order_guid: null,
  }))
  .build()

export const VendorFactory = factory
  .define(Vendor, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    name: faker.company.name(),
    id: faker.string.alphanumeric(8),
    notes: '',
    currency: '',
    active: 1,
    tax_override: 0,
  }))
  .build()

export const LotFactory = factory
  .define(Lot, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    account_guid: null,
    is_closed: 0,
  }))
  .build()

export const PriceFactory = factory
  .define(Price, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    commodity_guid: '',
    currency_guid: '',
    date: DateTime.fromJSDate(faker.date.recent()),
    source: null,
    type: null,
    value_num: '1000',
    value_denom: '100',
  }))
  .build()

export const TaxtableFactory = factory
  .define(Taxtable, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    name: faker.lorem.word(),
    refcount: '0',
    invisible: 0,
    parent: null,
  }))
  .build()

export const TaxtableEntryFactory = factory
  .define(TaxtableEntry, async () => ({
    taxtable: '',
    account: '',
    amount_num: '1000',
    amount_denom: '100',
    type: 0,
  }))
  .build()

export const SchedxactionFactory = factory
  .define(Schedxaction, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    name: faker.lorem.words(3),
    enabled: 1,
    start_date: DateTime.fromJSDate(faker.date.recent()),
    end_date: null,
    last_occur: null,
    num_occur: 12,
    rem_occur: 12,
    auto_create: 0,
    auto_notify: 0,
    adv_creation: 0,
    adv_notify: 0,
    instance_count: 0,
    template_act_guid: '',
  }))
  .build()

export const RecurrenceFactory = factory
  .define(Recurrence, async ({ faker }) => ({
    obj_guid: '',
    recurrence_mult: 1,
    recurrence_period_type: 'MONTH',
    recurrence_period_start: DateTime.fromJSDate(faker.date.recent()),
    recurrence_weekend_adjust: 'none',
  }))
  .build()

export const OrderFactory = factory
  .define(Order, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    id: faker.string.alphanumeric(8),
    notes: '',
    reference: '',
    active: 1,
    date_opened: DateTime.fromJSDate(faker.date.recent()),
    date_closed: DateTime.fromJSDate(faker.date.recent()),
    owner_type: 0,
    owner_guid: '',
  }))
  .build()

export const EmployeeFactory = factory
  .define(Employee, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    username: faker.internet.username(),
    id: faker.string.alphanumeric(8),
    language: 'en_US',
    acl: '',
    active: 1,
    currency: '',
    workday_num: '28800',
    workday_denom: '1',
    rate_num: '2500',
    rate_denom: '100',
  }))
  .build()

export const JobFactory = factory
  .define(Job, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    id: faker.string.alphanumeric(8),
    name: faker.lorem.words(3),
    reference: '',
    active: 1,
    owner_type: null,
    owner_guid: null,
  }))
  .build()

export const BilltermFactory = factory
  .define(Billterm, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    name: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    refcount: 1,
    invisible: 0,
    parent: null,
    type: 'Days',
    duedays: 30,
    discountdays: null,
    discount_num: null,
    discount_denom: null,
    cutoff: null,
  }))
  .build()

export const BookFactory = factory
  .define(Book, async ({ faker }) => ({
    guid: faker.string.uuid().replace(/-/g, ''),
    root_account_guid: '',
    root_template_guid: '',
  }))
  .build()

export const VersionFactory = factory
  .define(Version, async ({ faker }) => ({
    table_name: faker.string.alphanumeric(10),
    table_version: 1,
  }))
  .build()
