import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Price from 'App/Models/Price'
import PriceValidator from 'App/Validators/PriceValidator'
import { DateTime } from 'luxon'

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

  public async store({ request, response }: HttpContextContract) {
    const { commodity_guid, currency_guid, date, source = 'user:price', type = null, value_num, value_denom } = request.all()

    await request.validate(PriceValidator)
    if (value_num.length != value_denom.length) {
      return response.status(422).send({errors: [{message: "value_num and value_denom must be the same length"}]})
    }
    //TODO: ensure commodity_guid, currency_guid, source, and date are unique

    const price = await new Price().fill({ commodity_guid, currency_guid, date, source, type, value_num, value_denom }).save()

    return price

  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
