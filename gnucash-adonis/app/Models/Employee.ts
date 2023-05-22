import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Employee extends BaseModel {
  @column({ isPrimary: true })
  public guid: string

  @column()
  public acl: string

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
  public ccard_guid: string | null

  @column()
  public currency: string

  @column()
  public id: string

  @column()
  public language: string

  @column()
  public rate_denom: string

  @column()
  public rate_num: string

  @column()
  public username: string

  @column()
  public workday_denom: string

  @column()
  public workday_num: string
}
