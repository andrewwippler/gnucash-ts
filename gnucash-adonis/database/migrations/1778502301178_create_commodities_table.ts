import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'commodities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('namespace', 2048).notNullable()
      table.string('mnemonic', 2048).notNullable()
      table.string('fullname', 2048).nullable()
      table.string('cusip', 2048).nullable()
      table.integer('fraction').notNullable()
      table.integer('quote_flag').notNullable()
      table.string('quote_source', 2048).nullable()
      table.string('quote_tz', 2048).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
