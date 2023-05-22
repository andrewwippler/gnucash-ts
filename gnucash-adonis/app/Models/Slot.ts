import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Slot extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public double_val: number | null

  @column.date()
  public gdate_val: DateTime | null

  @column()
  public guid_val: string | null

  @column()
  public int64_val: string | null

  @column()
  public name: string

  @column()
  public numeric_val_denom: string | null

  @column()
  public numeric_val_num: string | null

  @column()
  public obj_guid: string

  @column()
  public slot_type: number

  @column()
  public string_val: string | null

  @column.date()
  public timespec_val?: DateTime | null
}
