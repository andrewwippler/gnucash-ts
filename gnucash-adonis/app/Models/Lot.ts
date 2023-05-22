import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Lot extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public account_guid: string | null

  @column()
  public is_closed: number
}
