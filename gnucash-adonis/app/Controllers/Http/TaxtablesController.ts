import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Taxtable from 'App/Models/Taxtable'

export default class TaxtablesController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const taxtables = await Taxtable.query().paginate(page, limit)
    // console.log(taxtables)
    return taxtables.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const taxtables = await Taxtable.findBy('guid', guid)
    const prettyReturn = { ...taxtables?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
