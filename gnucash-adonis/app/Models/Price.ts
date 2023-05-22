import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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
}
