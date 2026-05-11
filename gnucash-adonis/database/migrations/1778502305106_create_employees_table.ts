import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'employees'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('username', 2048).notNullable()
      table.string('id', 2048).notNullable()
      table.string('language', 2048).notNullable()
      table.string('acl', 2048).notNullable()
      table.integer('active').notNullable()
      table.string('currency', 32).notNullable()
      table.string('ccard_guid', 32).nullable()
      table.bigInteger('workday_num').notNullable()
      table.bigInteger('workday_denom').notNullable()
      table.bigInteger('rate_num').notNullable()
      table.bigInteger('rate_denom').notNullable()
      table.string('addr_name', 1024).nullable()
      table.string('addr_addr1', 1024).nullable()
      table.string('addr_addr2', 1024).nullable()
      table.string('addr_addr3', 1024).nullable()
      table.string('addr_addr4', 1024).nullable()
      table.string('addr_phone', 128).nullable()
      table.string('addr_fax', 128).nullable()
      table.string('addr_email', 256).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
