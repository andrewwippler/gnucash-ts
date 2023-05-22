import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Vendor from 'App/Models/Vendor'

export default class VendorsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const vendors = await Vendor.query().paginate(page, limit)
    // console.log(vendors)
    return vendors.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const vendor = await Vendor.findBy('guid', guid)
    const prettyReturn = { ...vendor?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
