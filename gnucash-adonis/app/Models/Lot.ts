import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Account from './Account.js'
import { HasMany } from "@adonisjs/lucid/types/relations";

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
