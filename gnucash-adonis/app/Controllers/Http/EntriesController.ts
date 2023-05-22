import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Entry from 'App/Models/Entry'

export default class EntriesController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const entries = await Entry.query().paginate(page, limit)
    // console.log(entries)
    return entries.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const entries = await Entry.findBy('guid', guid)
    const prettyReturn = { ...entries?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
