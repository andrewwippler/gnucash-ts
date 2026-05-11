import type { HttpContext } from '@adonisjs/core/http'
import Invoice from '#app/Models/Invoice'

export default class InvoicesController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const invoices = await Invoice.query().paginate(page, limit)
    // console.log(invoices)
    return invoices.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const invoices = await Invoice.findBy('guid', guid)
    const prettyReturn = { ...invoices?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
