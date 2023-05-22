import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Invoice extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public active: number

  @column()
  public billing_id: string | null

  @column()
  public billto_guid: string | null

  @column()
  public billto_type: number | null

  @column()
  public charge_amt_denom: string | null

  @column()
  public charge_amt_num: string | null

  @column()
  public currency: string

  @column.date()
  public date_opened?: DateTime | null

  @column.date()
  public date_posted?: DateTime | null

  @column()
  public id: string

  @column()
  public notes: string

  @column()
  public owner_guid: string | null

  @column()
  public owner_type: number | null

  @column()
  public post_acc: string | null

  @column()
  public post_lot: string | null

  @column()
  public post_txn: string | null

  @column()
  public terms: string | null
}
