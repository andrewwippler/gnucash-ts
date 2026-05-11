import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Account from './Account.js'
import Taxtable from './Taxtable.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

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

  @belongsTo(() => Taxtable, {
    foreignKey: 'taxtable',
    localKey: 'guid',
  })
  public taxtableRel: BelongsTo<typeof Taxtable>

  @belongsTo(() => Account, {
    foreignKey: 'account',
    localKey: 'guid',
  })
  public accountRel: BelongsTo<typeof Account>
}
