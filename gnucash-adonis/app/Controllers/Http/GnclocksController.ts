import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Gnclock from 'App/Models/Gnclock'

export default class GnclocksController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const gnclocks = await Gnclock.query().paginate(page, limit)
    // console.log(gnclocks)
    return gnclocks.toJSON()
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
