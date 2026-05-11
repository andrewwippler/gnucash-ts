import type { HttpContext } from '@adonisjs/core/http'
import Lot from '#app/Models/Lot'

export default class LotsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const lots = await Lot.query().paginate(page, limit)
    // console.log(lots)
    return lots.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const lots = await Lot.findBy('guid', guid)
    const prettyReturn = { ...lots?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
