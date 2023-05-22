import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TaxtableEntry from 'App/Models/TaxtableEntry'

export default class TaxtableEntriesController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const taxtableEntries = await TaxtableEntry.query().paginate(page, limit)
    // console.log(taxtableEntries)
    return taxtableEntries.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const id = params.id
    const taxtableEntries = await TaxtableEntry.findBy('id', id)
    const prettyReturn = { ...taxtableEntries?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
