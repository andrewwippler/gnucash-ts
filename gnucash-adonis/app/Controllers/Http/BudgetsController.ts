import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Budget from 'App/Models/Budget'

export default class BudgetsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const budgets = await Budget.query().paginate(page, limit)
    // console.log(budgets)
    return budgets.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const budget = await Budget.findBy('guid', guid)
    const prettyReturn = { ...budget?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
