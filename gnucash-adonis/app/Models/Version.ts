import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Version extends BaseModel {
  @column()
  public table_name: string

  @column()
  public table_version: number
}
