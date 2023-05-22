import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Recurrence from 'App/Models/Recurrence'

export default class RecurrencesController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const recurrences = await Recurrence.query().paginate(page, limit)
    // console.log(recurrences)
    return recurrences.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const id = params.id
    const recurrences = await Recurrence.findBy('id', id)
    const prettyReturn = { ...recurrences?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
