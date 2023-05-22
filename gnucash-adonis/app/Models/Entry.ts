import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Entry extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public action: string | null

  @column()
  public b_acct: string | null

  @column()
  public b_paytype: number | null

  @column()
  public b_price_denom: string | null

  @column()
  public b_price_num: string | null

  @column()
  public b_taxable: number | null

  @column()
  public b_taxincluded: number | null

  @column()
  public b_taxtable: string | null

  @column()
  public bill: string | null

  @column()
  public billable: number | null

  @column()
  public billto_guid: string | null

  @column()
  public billto_type: number | null

  @column.date()
  public date?: DateTime

  @column.date()
  public date_entered?: DateTime | null

  @column()
  public description: string | null

  @column()
  public i_acct: string | null

  @column()
  public i_disc_how: string | null

  @column()
  public i_disc_type: string | null

  @column()
  public i_discount_denom: string | null

  @column()
  public i_discount_num: string | null

  @column()
  public i_price_denom: string | null

  @column()
  public i_price_num: string | null

  @column()
  public i_taxable: number | null

  @column()
  public i_taxincluded: number | null

  @column()
  public i_taxtable: string | null

  @column()
  public invoice: string | null

  @column()
  public notes: string | null

  @column()
  public order_guid: string | null

  @column()
  public quantity_denom: string | null

  @column()
  public quantity_num: string | null
}
