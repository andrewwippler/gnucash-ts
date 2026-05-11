import type { HttpContext } from '@adonisjs/core/http'
import TaxtableEntry from '#app/Models/TaxtableEntry'

export default class TaxtableEntriesController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const taxtableEntries = await TaxtableEntry.query().paginate(page, limit)
    // console.log(taxtableEntries)
    return taxtableEntries.toJSON()
  }

  public async show({ params }: HttpContext) {
    const id = params.id
    const taxtableEntries = await TaxtableEntry.findBy('id', id)
    const prettyReturn = { ...taxtableEntries?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
