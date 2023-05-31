import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Transaction from './Transaction'
import Account from './Account'

export default class Split extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public account_guid: string

  @column()
  public action: string

  @column()
  public lot_guid: string | null

  @column()
  public memo: string

  @column()
  public quantity_denom: string

  @column()
  public quantity_num: string

  @column.date()
  public reconcile_date?: DateTime | null

  @column()
  public reconcile_state: string

  @column()
  public tx_guid: string

  @column()
  public value_denom: string

  @column()
  public value_num: string

  @belongsTo(() => Transaction)
  public transaction: BelongsTo<typeof Transaction>

  @belongsTo(() => Account, {
    foreignKey: 'account_guid',
    localKey: 'guid',
  })
  public account: BelongsTo<typeof Account>

}
