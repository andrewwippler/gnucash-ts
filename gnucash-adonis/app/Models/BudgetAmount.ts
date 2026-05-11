import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Account from './Account.js'
import Budget from './Budget.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

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

  @belongsTo(() => Account, {
    foreignKey: 'account_guid',
    localKey: 'guid',
  })
  public account: BelongsTo<typeof Account>

  @belongsTo(() => Budget, {
    foreignKey: 'budget_guid',
    localKey: 'guid',
  })
  public budget: BelongsTo<typeof Budget>
}
