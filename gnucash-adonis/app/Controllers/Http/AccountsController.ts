import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getParent } from 'App/Helpers/AccountHelpers'
import Account from 'App/Models/Account'


export default class AccountsController {
  public async index({ request }: HttpContextContract) {
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

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const account = await Account.query().where('guid', guid)
      .preload('lot')
      .preload('commodity')
    //@ts-ignore
    const prettyReturn = { ...account[0].toJSON(), full_path: await getParent(account[0])}
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
