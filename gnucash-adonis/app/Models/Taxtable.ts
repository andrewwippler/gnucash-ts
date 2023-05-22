import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Taxtable extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public invisible: number

  @column()
  public name: string

  @column()
  public parent: string | null

  @column()
  public refcount: string
}
