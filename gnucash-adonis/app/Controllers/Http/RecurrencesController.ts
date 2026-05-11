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
    const recurrence = await Recurrence.query().where('id', id).preload('schedxaction').first()
    const prettyReturn = { ...recurrence?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
