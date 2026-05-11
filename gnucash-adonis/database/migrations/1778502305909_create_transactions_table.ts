import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('currency_guid', 32).notNullable()
      table.string('num', 2048).notNullable()
      table.dateTime('post_date').nullable().defaultTo('1970-01-01 00:00:00')
      table.dateTime('enter_date').nullable().defaultTo('1970-01-01 00:00:00')
      table.string('description', 2048).nullable()
      table.index(['post_date'], 'tx_post_date_index')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
