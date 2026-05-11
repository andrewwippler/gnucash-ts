import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'billterms'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('name', 2048).notNullable()
      table.string('description', 2048).notNullable()
      table.integer('refcount').notNullable()
      table.integer('invisible').notNullable()
      table.string('parent', 32).nullable()
      table.string('type', 2048).notNullable()
      table.integer('duedays').nullable()
      table.integer('discountdays').nullable()
      table.bigInteger('discount_num').nullable()
      table.bigInteger('discount_denom').nullable()
      table.integer('cutoff').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
