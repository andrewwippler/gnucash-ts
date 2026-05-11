import type { HttpContext } from '@adonisjs/core/http'
import Gnclock from '#app/Models/Gnclock'

export default class GnclocksController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const gnclocks = await Gnclock.query().paginate(page, limit)
    // console.log(gnclocks)
    return gnclocks.toJSON()
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
