import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Lot from 'App/Models/Lot'

export default class LotsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const lots = await Lot.query().paginate(page, limit)
    // console.log(lots)
    return lots.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const lots = await Lot.findBy('guid', guid)
    const prettyReturn = { ...lots?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
