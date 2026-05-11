import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Account from './Account.js'
import Billterm from './Billterm.js'
import Commodity from './Commodity.js'
import Entry from './Entry.js'
import Lot from './Lot.js'
import Transaction from './Transaction.js'
import { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Invoice extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public active: number

  @column()
  public billing_id: string | null

  @column()
  public billto_guid: string | null

  @column()
  public billto_type: number | null

  @column()
  public charge_amt_denom: string | null

  @column()
  public charge_amt_num: string | null

  @column()
  public currency: string

  @column.date()
  public date_opened?: DateTime | null

  @column.date()
  public date_posted?: DateTime | null

  @column()
  public id: string

  @column()
  public notes: string

  @column()
  public owner_guid: string | null

  @column()
  public owner_type: number | null

  @column()
  public post_acc: string | null

  @column()
  public post_lot: string | null

  @column()
  public post_txn: string | null

  @column()
  public terms: string | null

  @belongsTo(() => Commodity, {
    foreignKey: 'currency',
    localKey: 'guid',
  })
  public currencyRel: BelongsTo<typeof Commodity>

  @belongsTo(() => Transaction, {
    foreignKey: 'post_txn',
    localKey: 'guid',
  })
  public postTransaction: BelongsTo<typeof Transaction>

  @belongsTo(() => Lot, {
    foreignKey: 'post_lot',
    localKey: 'guid',
  })
  public postLot: BelongsTo<typeof Lot>

  @belongsTo(() => Account, {
    foreignKey: 'post_acc',
    localKey: 'guid',
  })
  public postAccount: BelongsTo<typeof Account>

  @belongsTo(() => Billterm, {
    foreignKey: 'terms',
    localKey: 'guid',
  })
  public termsRel: BelongsTo<typeof Billterm>

  @hasMany(() => Entry, {
    foreignKey: 'invoice',
    localKey: 'guid',
  })
  public entries: HasMany<typeof Entry>
}
