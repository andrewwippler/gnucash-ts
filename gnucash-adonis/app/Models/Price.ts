import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Commodity from './Commodity.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Price extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public commodity_guid: string

  @column()
  public currency_guid: string

  @column.date()
  public date?: DateTime

  @column()
  public source: string | null

  @column()
  public type: string | null

  @column()
  public value_denom: string

  @column()
  public value_num: string

  @belongsTo(() => Commodity, {
    foreignKey: 'commodity_guid',
    localKey: 'guid',
  })
  public commodity: BelongsTo<typeof Commodity>

  @belongsTo(() => Commodity, {
    foreignKey: 'currency_guid',
    localKey: 'guid',
  })
  public currency: BelongsTo<typeof Commodity>
}
