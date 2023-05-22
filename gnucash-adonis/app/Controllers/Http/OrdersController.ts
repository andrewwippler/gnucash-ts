import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'

export default class OrdersController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const orders = await Order.query().paginate(page, limit)
    // console.log(orders)
    return orders.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const orders = await Order.findBy('guid', guid)
    const prettyReturn = { ...orders?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
