import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'invoices'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('id', 2048).notNullable()
      table.dateTime('date_opened').nullable().defaultTo('1970-01-01 00:00:00')
      table.dateTime('date_posted').nullable().defaultTo('1970-01-01 00:00:00')
      table.string('notes', 2048).notNullable()
      table.integer('active').notNullable()
      table.string('currency', 32).notNullable()
      table.integer('owner_type').nullable()
      table.string('owner_guid', 32).nullable()
      table.string('terms', 32).nullable()
      table.string('billing_id', 2048).nullable()
      table.string('post_txn', 32).nullable()
      table.string('post_lot', 32).nullable()
      table.string('post_acc', 32).nullable()
      table.integer('billto_type').nullable()
      table.string('billto_guid', 32).nullable()
      table.bigInteger('charge_amt_num').nullable()
      table.bigInteger('charge_amt_denom').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
