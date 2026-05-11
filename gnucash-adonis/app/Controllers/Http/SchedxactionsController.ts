import type { HttpContext } from '@adonisjs/core/http'
import Schedxaction from '#app/Models/Schedxaction'

export default class SchedxactionsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const schedxactions = await Schedxaction.query().paginate(page, limit)
    // console.log(schedxactions)
    return schedxactions.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const schedxactions = await Schedxaction.findBy('guid', guid)
    const prettyReturn = { ...schedxactions?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
