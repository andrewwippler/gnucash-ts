import type { HttpContext } from '@adonisjs/core/http'
import Split from '#app/Models/Split'

export default class SplitsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const splits = await Split.query()
      .preload('account')
      .preload('transaction')
      .paginate(page, limit)
    return splits.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const splits = await Split.query()
      .where('guid', guid)
      .preload('account')
      .preload('transaction')
      .preload('lot')
      .first()
    const prettyReturn = { ...splits?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
