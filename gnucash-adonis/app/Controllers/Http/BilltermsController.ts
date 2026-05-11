import type { HttpContext } from '@adonisjs/core/http'
import Billterm from '#app/Models/Billterm'

export default class BilltermsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const billterms = await Billterm.query().paginate(page, limit)
    // console.log(billterms)
    return billterms.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const billterm = await Billterm.findBy('guid', guid)
    const prettyReturn = { ...billterm?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
