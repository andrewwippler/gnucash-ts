import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Price from 'App/Models/Price'

export default class PricesController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const prices = await Price.query().paginate(page, limit)
    // console.log(prices)
    return prices.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const prices = await Price.findBy('guid', guid)
    const prettyReturn = { ...prices?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
