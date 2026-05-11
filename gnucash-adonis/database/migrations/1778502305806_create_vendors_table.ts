import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vendors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('name', 2048).notNullable()
      table.string('id', 2048).notNullable()
      table.string('notes', 2048).notNullable()
      table.string('currency', 32).notNullable()
      table.integer('active').notNullable()
      table.integer('tax_override').notNullable()
      table.string('addr_name', 1024).nullable()
      table.string('addr_addr1', 1024).nullable()
      table.string('addr_addr2', 1024).nullable()
      table.string('addr_addr3', 1024).nullable()
      table.string('addr_addr4', 1024).nullable()
      table.string('addr_phone', 128).nullable()
      table.string('addr_fax', 128).nullable()
      table.string('addr_email', 256).nullable()
      table.string('terms', 32).nullable()
      table.string('tax_inc', 2048).nullable()
      table.string('tax_table', 32).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
