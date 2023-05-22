import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Billterm extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public cutoff: number | null

  @column()
  public description: string

  @column()
  public discount_denom: string | null

  @column()
  public discount_num: string | null

  @column()
  public discountdays: number | null

  @column()
  public duedays: number | null

  @column()
  public invisible: number

  @column()
  public name: string

  @column()
  public parent: string | null

  @column()
  public refcount: number

  @column()
  public type: string
}
