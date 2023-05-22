import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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
}
