import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Commodity from 'App/Models/Commodity'

export default class CommoditiesController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const commodities = await Commodity.query().paginate(page, limit)
    // console.log(commodities)
    return commodities.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const commodity = await Commodity.findBy('guid', guid)
    const prettyReturn = { ...commodity?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
