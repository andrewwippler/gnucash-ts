import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TaxtableEntry extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public account: string

  @column()
  public amount_denom: string

  @column()
  public amount_num: string

  @column()
  public taxtable: string

  @column()
  public type: number
}
