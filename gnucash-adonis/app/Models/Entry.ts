import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Account from './Account.js'
import Billterm from './Billterm.js'
import Invoice from './Invoice.js'
import Order from './Order.js'
import Taxtable from './Taxtable.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Entry extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public action: string | null

  @column()
  public b_acct: string | null

  @column()
  public b_paytype: number | null

  @column()
  public b_price_denom: string | null

  @column()
  public b_price_num: string | null

  @column()
  public b_taxable: number | null

  @column()
  public b_taxincluded: number | null

  @column()
  public b_taxtable: string | null

  @column()
  public bill: string | null

  @column()
  public billable: number | null

  @column()
  public billto_guid: string | null

  @column()
  public billto_type: number | null

  @column.date()
  public date?: DateTime

  @column.date()
  public date_entered?: DateTime | null

  @column()
  public description: string | null

  @column()
  public i_acct: string | null

  @column()
  public i_disc_how: string | null

  @column()
  public i_disc_type: string | null

  @column()
  public i_discount_denom: string | null

  @column()
  public i_discount_num: string | null

  @column()
  public i_price_denom: string | null

  @column()
  public i_price_num: string | null

  @column()
  public i_taxable: number | null

  @column()
  public i_taxincluded: number | null

  @column()
  public i_taxtable: string | null

  @column()
  public invoice: string | null

  @column()
  public notes: string | null

  @column()
  public order_guid: string | null

  @column()
  public quantity_denom: string | null

  @column()
  public quantity_num: string | null

  @belongsTo(() => Order, {
    foreignKey: 'order_guid',
    localKey: 'guid',
  })
  public order: BelongsTo<typeof Order>

  @belongsTo(() => Invoice, {
    foreignKey: 'invoice',
    localKey: 'guid',
  })
  public invoiceRel: BelongsTo<typeof Invoice>

  @belongsTo(() => Account, {
    foreignKey: 'i_acct',
    localKey: 'guid',
  })
  public incomeAccount: BelongsTo<typeof Account>

  @belongsTo(() => Account, {
    foreignKey: 'b_acct',
    localKey: 'guid',
  })
  public billAccount: BelongsTo<typeof Account>

  @belongsTo(() => Taxtable, {
    foreignKey: 'i_taxtable',
    localKey: 'guid',
  })
  public incomeTaxtable: BelongsTo<typeof Taxtable>

  @belongsTo(() => Taxtable, {
    foreignKey: 'b_taxtable',
    localKey: 'guid',
  })
  public billTaxtable: BelongsTo<typeof Taxtable>

  @belongsTo(() => Billterm, {
    foreignKey: 'bill',
    localKey: 'guid',
  })
  public billterm: BelongsTo<typeof Billterm>
}
