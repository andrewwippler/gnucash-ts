import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'prices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('commodity_guid', 32).notNullable()
      table.string('currency_guid', 32).notNullable()
      table.dateTime('date').notNullable().defaultTo('1970-01-01 00:00:00')
      table.string('source', 2048).nullable()
      table.string('type', 2048).nullable()
      table.bigInteger('value_num').notNullable()
      table.bigInteger('value_denom').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
