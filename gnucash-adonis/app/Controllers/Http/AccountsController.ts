import type { HttpContext } from '@adonisjs/core/http'
import { getParent } from '#app/Helpers/AccountHelpers'
import Account from '#app/Models/Account'


export default class AccountsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50


    const accounts = await Account.query()
      .preload('accounts', (builder) => {
      builder.orderBy('name', 'asc')
      })
      .preload('lot')
      .preload('commodity')
      .paginate(page, limit)
    return accounts.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const account = await Account.query().where('guid', guid)
      .preload('lot')
      .preload('commodity')
    //@ts-ignore
    const prettyReturn = { ...account[0].toJSON(), full_path: await getParent(account[0])}
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
