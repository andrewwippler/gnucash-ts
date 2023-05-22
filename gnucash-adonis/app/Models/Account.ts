import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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

}
