import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'budgets'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('name', 2048).notNullable()
      table.string('description', 2048).nullable()
      table.integer('num_periods').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
