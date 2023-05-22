import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public active: number

  @column.date()
  public date_closed?: DateTime

  @column.date()
  public date_opened?: DateTime

  @column()
  public id: string

  @column()
  public notes: string

  @column()
  public owner_guid: string

  @column()
  public owner_type: number

  @column()
  public reference: string
}
