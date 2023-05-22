import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Split from 'App/Models/Split'

export default class SplitsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const splits = await Split.query().paginate(page, limit)
    // console.log(splits)
    return splits.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const splits = await Split.findBy('guid', guid)
    const prettyReturn = { ...splits?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
