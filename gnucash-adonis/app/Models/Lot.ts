import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Account from './Account'

export default class Lot extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public account_guid: string | null

  @column()
  public is_closed: number

  @hasMany(() => Account)
  public accounts: HasMany<typeof Account>
}
