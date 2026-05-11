import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'lots'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('account_guid', 32).nullable()
      table.integer('is_closed').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
