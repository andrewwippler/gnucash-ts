import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Account from './Account.js'
import Split from './Split.js'
import { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Lot extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public account_guid: string | null

  @column()
  public is_closed: number

  @belongsTo(() => Account, {
    foreignKey: 'account_guid',
    localKey: 'guid',
  })
  public account: BelongsTo<typeof Account>

  @hasMany(() => Split, {
    foreignKey: 'lot_guid',
    localKey: 'guid',
  })
  public splits: HasMany<typeof Split>
}
