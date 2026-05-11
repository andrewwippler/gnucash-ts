import type { HttpContext } from '@adonisjs/core/http'
import Slot from '#app/Models/Slot'

export default class SlotsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const slots = await Slot.query().paginate(page, limit)
    // console.log(slots)
    return slots.toJSON()
  }

  public async show({ params }: HttpContext) {
    const id = params.id
    const slots = await Slot.findBy('id', id)
    const prettyReturn = { ...slots?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
