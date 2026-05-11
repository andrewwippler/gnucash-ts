import type { HttpContext } from '@adonisjs/core/http'
import Book from '#app/Models/Book'

export default class BooksController {
  public async index({ request }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 50

    const books = await Book.query().paginate(page, limit)
    // console.log(books)
    return books.toJSON()
  }

  public async show({ params }: HttpContext) {
    const guid = params.id
    const book = await Book.findBy('guid', guid)
    const prettyReturn = { ...book?.toJSON() }
    return prettyReturn
  }

  public async create({}: HttpContext) {}

  public async store({}: HttpContext) {}

  public async edit({}: HttpContext) {}

  public async update({}: HttpContext) {}

  public async destroy({}: HttpContext) {}
}
