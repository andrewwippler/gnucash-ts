import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import TaxtableEntry from './TaxtableEntry.js'
import { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Taxtable extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public invisible: number

  @column()
  public name: string

  @column()
  public parent: string | null

  @column()
  public refcount: string

  @hasMany(() => TaxtableEntry, {
    foreignKey: 'taxtable',
    localKey: 'guid',
  })
  public taxtableEntries: HasMany<typeof TaxtableEntry>

  @belongsTo(() => Taxtable, {
    foreignKey: 'parent',
    localKey: 'guid',
  })
  public parentRel: BelongsTo<typeof Taxtable>
}
