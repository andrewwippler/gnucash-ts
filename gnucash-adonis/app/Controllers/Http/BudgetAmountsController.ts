import type { HttpContext } from '@adonisjs/core/http'
import BudgetAmount from '#app/Models/BudgetAmount'

export default class BudgetAmountsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const budgetAmounts = await BudgetAmount.query().paginate(page, limit)
    // console.log(budgetAmounts)
    return budgetAmounts.toJSON()
  }

  public async show({ params }: HttpContext) {
    const id = params.id
    const budgetAmount = await BudgetAmount.findBy('id', id)
    const prettyReturn = { ...budgetAmount?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
