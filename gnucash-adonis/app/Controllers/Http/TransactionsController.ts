import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getParent } from 'App/Helpers/AccountHelpers'
import Transaction from 'App/Models/Transaction'

export default class TransactionsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 500

    const transactions = await Transaction.query()
    .orderBy('post_date', 'asc')
    .paginate(page, limit)
    return transactions
  }

  public async show({ params, response }: HttpContextContract) {
    const guid = params.id
    const transactions = await Transaction.query()
      .where('guid', guid)
      .preload('splits', (splitsQuery) => {
        splitsQuery.preload('account')
      })
    .withCount('splits', (query) => {
      query.as('split_num')
    })

    // console.log(_.get(params, 'id', 0),auth.user?.id,!!illustrationQuery[0],!illustrationQuery[0])
    if (!!transactions[0]) {
      let transaction = { ...transactions[0].toJSON() };
      transaction.splits = await Promise.all(transaction.splits.map(async (account) => {
        account.account.full_path = await getParent(account.account)
        return account
      }))

      // return await betterIdea
      return { ...transaction, split_num: transactions[0].$extras.split_num }
    }
    return response.status(403).send({ message: 'You do not have permission to access this resource' })

  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
