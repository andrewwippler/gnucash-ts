import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Commodity from './Commodity.js'
import Lot from './Lot.js'
import Split from './Split.js'
import { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Account extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public name: string

  @column()
  public account_type: string

  @column()
  public commodity_guid: string | null

  @column()
  public commodity_scu: number

  @column()
  public non_std_scu: number

  @column()
  public parent_guid: string | null

  @column()
  public code: string | null

  @column()
  public description: string | null

  @column()
  public hidden: number | null

  @column()
  public placeholder: number | null

  @belongsTo(() => Commodity, {
    foreignKey: 'commodity_guid',
    localKey: 'guid',
  })
  public commodity: BelongsTo<typeof Commodity>

  @belongsTo(() => Account, {
    foreignKey: 'parent_guid',
    localKey: 'guid',
  })
  public parent: BelongsTo<typeof Account>

  @hasMany(() => Account, {
    foreignKey: 'parent_guid',
    localKey: 'guid',
  })
  public accounts: HasMany<typeof Account>

  @hasMany(() => Lot, {
    foreignKey: 'account_guid',
    localKey: 'guid',
  })
  public lots: HasMany<typeof Lot>

  @hasMany(() => Split, {
    foreignKey: 'account_guid',
    localKey: 'guid',
  })
  public splits: HasMany<typeof Split>
}
