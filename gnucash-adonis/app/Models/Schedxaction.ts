import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Account from './Account.js'
import Recurrence from './Recurrence.js'
import { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Schedxaction extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public adv_creation: number

  @column()
  public adv_notify: number

  @column()
  public auto_create: number

  @column()
  public auto_notify: number

  @column()
  public enabled: number

  @column.date()
  public end_date: DateTime | null

  @column()
  public instance_count: number

  @column.date()
  public last_occur: DateTime | null

  @column()
  public name: string | null

  @column()
  public num_occur: number

  @column()
  public rem_occur: number

  @column.date()
  public start_date: DateTime | null

  @column()
  public template_act_guid: string

  @belongsTo(() => Account, {
    foreignKey: 'template_act_guid',
    localKey: 'guid',
  })
  public templateAccount: BelongsTo<typeof Account>

  @hasMany(() => Recurrence, {
    foreignKey: 'obj_guid',
    localKey: 'guid',
  })
  public recurrences: HasMany<typeof Recurrence>
}
