import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Customer extends BaseModel {
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
  public credit_denom: string

  @column()
  public credit_num: string

  @column()
  public currency: string

  @column()
  public discount_denom: string

  @column()
  public discount_num: string

  @column()
  public id: string

  @column()
  public name: string

  @column()
  public notes: string

  @column()
  public shipaddr_addr1: string | null

  @column()
  public shipaddr_addr2: string | null

  @column()
  public shipaddr_addr3: string | null

  @column()
  public shipaddr_addr4: string | null

  @column()
  public shipaddr_email: string | null

  @column()
  public shipaddr_fax: string | null

  @column()
  public shipaddr_name: string | null

  @column()
  public shipaddr_phone: string | null

  @column()
  public tax_included: number | null

  @column()
  public tax_override: number

  @column()
  public taxtable: string | null

  @column()
  public terms: string | null
}
