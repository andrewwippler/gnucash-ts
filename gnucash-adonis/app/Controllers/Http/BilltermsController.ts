import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Billterm from 'App/Models/Billterm'

export default class BilltermsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const billterms = await Billterm.query().paginate(page, limit)
    // console.log(billterms)
    return billterms.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const billterm = await Billterm.findBy('guid', guid)
    const prettyReturn = { ...billterm?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
