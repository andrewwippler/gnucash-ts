import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaction from 'App/Models/Transaction'

export default class TransactionsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const transactions = await Transaction.query().paginate(page, limit)
    // console.log(transactions)
    return transactions.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const transactions = await Transaction.findBy('guid', guid)
    const prettyReturn = { ...transactions?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
