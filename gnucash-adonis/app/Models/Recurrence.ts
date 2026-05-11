import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Schedxaction from './Schedxaction.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

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

  @belongsTo(() => Schedxaction, {
    foreignKey: 'obj_guid',
    localKey: 'guid',
  })
  public schedxaction: BelongsTo<typeof Schedxaction>
}
