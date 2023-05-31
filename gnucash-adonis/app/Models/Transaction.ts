import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Split from './Split'

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

  @hasMany(() => Split, {
    foreignKey: 'tx_guid',
    localKey: 'guid',
  })
  public splits: HasMany<typeof Split>
}
