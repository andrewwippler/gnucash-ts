import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'versions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('table_name', 50).notNullable().primary()
      table.integer('table_version').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
