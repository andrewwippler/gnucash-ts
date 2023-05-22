import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Customer from 'App/Models/Customer'

export default class CustomersController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const customers = await Customer.query().paginate(page, limit)
    // console.log(customers)
    return customers.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const customer = await Customer.findBy('guid', guid)
    const prettyReturn = { ...customer?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
