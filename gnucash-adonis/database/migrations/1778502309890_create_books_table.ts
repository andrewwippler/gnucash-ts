import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('root_account_guid', 32).notNullable()
      table.string('root_template_guid', 32).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
