import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Invoice from 'App/Models/Invoice'

export default class InvoicesController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const invoices = await Invoice.query().paginate(page, limit)
    // console.log(invoices)
    return invoices.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const invoices = await Invoice.findBy('guid', guid)
    const prettyReturn = { ...invoices?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
