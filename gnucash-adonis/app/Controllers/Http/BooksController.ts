import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'

export default class BooksController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1)
    const limit = 50

    const books = await Book.query().paginate(page, limit)
    // console.log(books)
    return books.toJSON()
  }

  public async show({ params }: HttpContextContract) {
    const guid = params.id
    const book = await Book.findBy('guid', guid)
    const prettyReturn = { ...book?.toJSON()}
    return prettyReturn
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
