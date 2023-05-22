import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Version extends BaseModel {

  @column()
  public table_name: string

  @column()
  public table_version: number

}
