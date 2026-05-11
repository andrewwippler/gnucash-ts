import type { HttpContext } from '@adonisjs/core/http'
import Version from '#app/Models/Version'

export default class VersionsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const versions = await Version.query().paginate(page, limit)
    // console.log(versions)
    return versions.toJSON()
  }


  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
