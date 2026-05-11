import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Commodity from './Commodity.js'
import Split from './Split.js'
import { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Transaction extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public currency_guid: string

  @column()
  public description: string | null

  @column.date()
  public enter_date?: DateTime | null

  @column()
  public num: string

  @column.date()
  public post_date?: DateTime | null

  @belongsTo(() => Commodity, {
    foreignKey: 'currency_guid',
    localKey: 'guid',
  })
  public currency: BelongsTo<typeof Commodity>

  @hasMany(() => Split, {
    foreignKey: 'tx_guid',
    localKey: 'guid',
  })
  public splits: HasMany<typeof Split>
}
