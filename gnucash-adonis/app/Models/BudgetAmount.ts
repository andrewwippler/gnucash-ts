import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class BudgetAmount extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public account_guid: string

  @column()
  public amount_denom: string

  @column()
  public amount_num: string

  @column()
  public budget_guid: string

  @column()
  public period_num: number
}
