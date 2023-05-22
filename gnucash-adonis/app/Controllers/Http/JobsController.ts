import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Job from 'App/Models/Job'

export default class JobsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const jobs = await Job.query().paginate(page, limit)
    // console.log(jobs)
    return jobs.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const jobs = await Job.findBy('guid', guid)
    const prettyReturn = { ...jobs?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
