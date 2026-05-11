import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Account from './Account.js'
import Price from './Price.js'
import Transaction from './Transaction.js'
import { HasMany } from '@adonisjs/lucid/types/relations'

export default class Commodity extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public cusip: string | null

  @column()
  public fraction: number

  @column()
  public fullname: string | null

  @column()
  public mnemonic: string

  @column()
  public namespace: string

  @column()
  public quote_flag: number

  @column()
  public quote_source: string | null

  @column()
  public quote_tz: string | null

  @hasMany(() => Account, {
    foreignKey: 'commodity_guid',
    localKey: 'guid',
  })
  public accounts: HasMany<typeof Account>

  @hasMany(() => Price, {
    foreignKey: 'commodity_guid',
    localKey: 'guid',
  })
  public pricesAsCommodity: HasMany<typeof Price>

  @hasMany(() => Price, {
    foreignKey: 'currency_guid',
    localKey: 'guid',
  })
  public pricesAsCurrency: HasMany<typeof Price>

  @hasMany(() => Transaction, {
    foreignKey: 'currency_guid',
    localKey: 'guid',
  })
  public transactions: HasMany<typeof Transaction>
}
