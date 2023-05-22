import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Employee from 'App/Models/Employee'

export default class EmployeesController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const employees = await Employee.query().paginate(page, limit)
    // console.log(employees)
    return employees.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const employees = await Employee.findBy('guid', guid)
    const prettyReturn = { ...employees?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
