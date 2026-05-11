import type { HttpContext } from '@adonisjs/core/http'
import Customer from '#app/Models/Customer'

export default class CustomersController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const customers = await Customer.query().paginate(page, limit)
    // console.log(customers)
    return customers.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const customer = await Customer.findBy('guid', guid)
    const prettyReturn = { ...customer?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
