import type { HttpContext } from '@adonisjs/core/http'
import Taxtable from '#app/Models/Taxtable'

export default class TaxtablesController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const taxtables = await Taxtable.query().paginate(page, limit)
    // console.log(taxtables)
    return taxtables.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const taxtable = await Taxtable.query()
      .where('guid', guid)
      .preload('taxtableEntries')
      .preload('parentRel')
      .first()
    const prettyReturn = { ...taxtable?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
