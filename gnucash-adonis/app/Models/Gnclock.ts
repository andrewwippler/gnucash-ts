import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Gnclock extends BaseModel {
  public static table = 'gnclock'

  @column()
  public Hostname: string | null

  @column()
  public PID: number | null
}
