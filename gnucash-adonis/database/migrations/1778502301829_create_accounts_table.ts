import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'accounts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('name', 2048).notNullable()
      table.string('account_type', 2048).notNullable()
      table.string('commodity_guid', 32).nullable()
      table.integer('commodity_scu').notNullable()
      table.integer('non_std_scu').notNullable()
      table.string('parent_guid', 32).nullable()
      table.string('code', 2048).nullable()
      table.string('description', 2048).nullable()
      table.integer('hidden').nullable()
      table.integer('placeholder').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
