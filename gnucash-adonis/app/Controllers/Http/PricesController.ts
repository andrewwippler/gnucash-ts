import type { HttpContext } from '@adonisjs/core/http'
import Price from '#app/Models/Price'

export default class PricesController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const prices = await Price.query().paginate(page, limit)
    // console.log(prices)
    return prices.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const prices = await Price.findBy('guid', guid)
    const prettyReturn = { ...prices?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
