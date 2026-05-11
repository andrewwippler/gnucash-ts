import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import BudgetAmount from './BudgetAmount.js'
import { HasMany } from '@adonisjs/lucid/types/relations'

export default class Budget extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public description: string | null

  @column()
  public name: string

  @column()
  public num_periods: number

  @hasMany(() => BudgetAmount, {
    foreignKey: 'budget_guid',
    localKey: 'guid',
  })
  public budgetAmounts: HasMany<typeof BudgetAmount>
}
