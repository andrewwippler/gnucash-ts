import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Slot from 'App/Models/Slot'

export default class SlotsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const slots = await Slot.query().paginate(page, limit)
    // console.log(slots)
    return slots.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const id = params.id
    const slots = await Slot.findBy('id', id)
    const prettyReturn = { ...slots?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
