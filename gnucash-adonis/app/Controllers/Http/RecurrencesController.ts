import type { HttpContext } from '@adonisjs/core/http'
import Recurrence from '#app/Models/Recurrence'

export default class RecurrencesController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const recurrences = await Recurrence.query().paginate(page, limit)
    // console.log(recurrences)
    return recurrences.toJSON()
  }

  public async show({ params }: HttpContext) {
    const id = params.id
    const recurrences = await Recurrence.findBy('id', id)
    const prettyReturn = { ...recurrences?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
