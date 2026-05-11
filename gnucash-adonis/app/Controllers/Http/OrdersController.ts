import type { HttpContext } from '@adonisjs/core/http'
import Order from '#app/Models/Order'

export default class OrdersController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const orders = await Order.query().paginate(page, limit)
    // console.log(orders)
    return orders.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const order = await Order.query().where('guid', guid).preload('entries').first()
    const prettyReturn = { ...order?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
