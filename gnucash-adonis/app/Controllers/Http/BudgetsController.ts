import type { HttpContext } from '@adonisjs/core/http'
import Budget from '#app/Models/Budget'

export default class BudgetsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const budgets = await Budget.query().paginate(page, limit)
    // console.log(budgets)
    return budgets.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const budget = await Budget.query().where('guid', guid).preload('budgetAmounts').first()
    const prettyReturn = { ...budget?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
