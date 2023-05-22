import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Job extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public active: number

  @column()
  public id: string

  @column()
  public name: string

  @column()
  public owner_guid: string | null

  @column()
  public owner_type: number | null

  @column()
  public reference: string
}
