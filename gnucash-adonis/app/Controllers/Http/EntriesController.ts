import type { HttpContext } from '@adonisjs/core/http'
import Entry from '#app/Models/Entry'

export default class EntriesController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const entries = await Entry.query().paginate(page, limit)
    return entries.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const entries = await Entry.query()
      .where('guid', guid)
      .preload('order')
      .preload('invoiceRel')
      .preload('incomeAccount')
      .preload('billAccount')
      .preload('billterm')
      .first()
    const prettyReturn = { ...entries?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
