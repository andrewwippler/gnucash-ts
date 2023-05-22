import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public root_account_guid: string

  @column()
  public root_template_guid: string
}
