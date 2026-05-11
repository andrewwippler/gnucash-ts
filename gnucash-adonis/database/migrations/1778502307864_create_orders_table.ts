import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('id', 2048).notNullable()
      table.string('notes', 2048).notNullable()
      table.string('reference', 2048).notNullable()
      table.integer('active').notNullable()
      table.dateTime('date_opened').notNullable().defaultTo('1970-01-01 00:00:00')
      table.dateTime('date_closed').notNullable().defaultTo('1970-01-01 00:00:00')
      table.integer('owner_type').notNullable()
      table.string('owner_guid', 32).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
