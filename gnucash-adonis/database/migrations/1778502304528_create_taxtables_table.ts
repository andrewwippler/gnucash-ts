import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'taxtables'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('name', 50).notNullable()
      table.bigInteger('refcount').notNullable()
      table.integer('invisible').notNullable()
      table.string('parent', 32).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
