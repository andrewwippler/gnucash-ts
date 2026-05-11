import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jobs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('id', 2048).notNullable()
      table.string('name', 2048).notNullable()
      table.string('reference', 2048).notNullable()
      table.integer('active').notNullable()
      table.integer('owner_type').nullable()
      table.string('owner_guid', 32).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
