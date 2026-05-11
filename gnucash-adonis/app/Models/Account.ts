import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Lot from './Lot.js'
import Commodity from './Commodity.js'
import { BelongsTo } from "@adonisjs/lucid/types/relations";
import { HasMany } from "@adonisjs/lucid/types/relations";

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

  @belongsTo(() => Lot, {
    foreignKey: 'guid',
    localKey: 'account_guid',
  })
  public lot: BelongsTo<typeof Lot>

  @belongsTo(() => Commodity, {
    foreignKey: 'commodity_guid',
    localKey: 'guid',
  })
  public commodity: BelongsTo<typeof Commodity>

  @belongsTo(() => Account, {
    foreignKey: 'guid',
    localKey: 'parent_guid',
  })
  public parent: BelongsTo<typeof Account>

  @hasMany(() => Account, {
    foreignKey: 'parent_guid',
    localKey: 'guid',
  })
  public accounts: HasMany<typeof Account>

}
