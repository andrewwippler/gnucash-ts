import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Billterm from './Billterm.js'
import Commodity from './Commodity.js'
import Taxtable from './Taxtable.js'
import { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Vendor extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public active: number

  @column()
  public addr_addr1: string | null

  @column()
  public addr_addr2: string | null

  @column()
  public addr_addr3: string | null

  @column()
  public addr_addr4: string | null

  @column()
  public addr_email: string | null

  @column()
  public addr_fax: string | null

  @column()
  public addr_name: string | null

  @column()
  public addr_phone: string | null

  @column()
  public currency: string

  @column()
  public id: string

  @column()
  public name: string

  @column()
  public notes: string

  @column()
  public tax_inc: string | null

  @column()
  public tax_override: number

  @column()
  public tax_table: string | null

  @column()
  public terms: string | null

  @belongsTo(() => Commodity, {
    foreignKey: 'currency',
    localKey: 'guid',
  })
  public currencyRel: BelongsTo<typeof Commodity>

  @belongsTo(() => Taxtable, {
    foreignKey: 'tax_table',
    localKey: 'guid',
  })
  public taxtableRel: BelongsTo<typeof Taxtable>

  @belongsTo(() => Billterm, {
    foreignKey: 'terms',
    localKey: 'guid',
  })
  public termsRel: BelongsTo<typeof Billterm>
}
