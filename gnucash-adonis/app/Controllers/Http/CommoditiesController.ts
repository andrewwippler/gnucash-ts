import type { HttpContext } from '@adonisjs/core/http'
import Commodity from '#app/Models/Commodity'

export default class CommoditiesController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const commodities = await Commodity.query().paginate(page, limit)
    // console.log(commodities)
    return commodities.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const commodity = await Commodity.findBy('guid', guid)
    const prettyReturn = { ...commodity?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
