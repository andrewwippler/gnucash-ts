import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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
}
