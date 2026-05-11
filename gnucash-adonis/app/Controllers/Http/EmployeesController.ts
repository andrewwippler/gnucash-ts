import type { HttpContext } from '@adonisjs/core/http'
import Employee from '#app/Models/Employee'

export default class EmployeesController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const employees = await Employee.query().paginate(page, limit)
    // console.log(employees)
    return employees.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const employees = await Employee.findBy('guid', guid)
    const prettyReturn = { ...employees?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
