import type { HttpContext } from '@adonisjs/core/http'
import Job from '#app/Models/Job'

export default class JobsController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const jobs = await Job.query().paginate(page, limit)
    // console.log(jobs)
    return jobs.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const jobs = await Job.findBy('guid', guid)
    const prettyReturn = { ...jobs?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
