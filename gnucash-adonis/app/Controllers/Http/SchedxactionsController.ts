import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Schedxaction from 'App/Models/Schedxaction'

export default class SchedxactionsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const schedxactions = await Schedxaction.query().paginate(page, limit)
    // console.log(schedxactions)
    return schedxactions.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const schedxactions = await Schedxaction.findBy('guid', guid)
    const prettyReturn = { ...schedxactions?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
