import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Recurrence extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public obj_guid: string

  @column()
  public recurrence_mult: number

  @column.date()
  public recurrence_period_start: DateTime

  @column()
  public recurrence_period_type: string

  @column()
  public recurrence_weekend_adjust: string
}
