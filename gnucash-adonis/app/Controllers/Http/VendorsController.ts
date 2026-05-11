import type { HttpContext } from '@adonisjs/core/http'
import Vendor from '#app/Models/Vendor'

export default class VendorsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const vendors = await Vendor.query().paginate(page, limit)
    // console.log(vendors)
    return vendors.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const vendor = await Vendor.query()
      .where('guid', guid)
      .preload('currencyRel')
      .preload('taxtableRel')
      .preload('termsRel')
      .first()
    const prettyReturn = { ...vendor?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
