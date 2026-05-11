import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Budget extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public description: string | null

  @column()
  public name: string

  @column()
  public num_periods: number
}
