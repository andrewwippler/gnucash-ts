import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getParent } from 'App/Helpers/AccountHelpers'
import Account from 'App/Models/Account'


export default class AccountsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50


    const accounts = await Account.query().paginate(page, limit)
    console.log(accounts)
    return accounts.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const account = await Account.findBy('guid', guid)
    //@ts-ignore
    const prettyReturn = { ...account?.toJSON(), fullpath: await getParent(account)}
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
