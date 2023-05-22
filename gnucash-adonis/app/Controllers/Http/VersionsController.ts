import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Version from 'App/Models/Version'

export default class VersionsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const versions = await Version.query().paginate(page, limit)
    // console.log(versions)
    return versions.toJSON()
  }


  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
