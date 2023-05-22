import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BudgetAmount from 'App/Models/BudgetAmount'

export default class BudgetAmountsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const budgetAmounts = await BudgetAmount.query().paginate(page, limit)
    // console.log(budgetAmounts)
    return budgetAmounts.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const id = params.id
    const budgetAmount = await BudgetAmount.findBy('id', id)
    const prettyReturn = { ...budgetAmount?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
