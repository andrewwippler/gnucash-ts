import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'entries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.dateTime('date').notNullable().defaultTo('1970-01-01 00:00:00')
      table.dateTime('date_entered').nullable().defaultTo('1970-01-01 00:00:00')
      table.string('description', 2048).nullable()
      table.string('action', 2048).nullable()
      table.string('notes', 2048).nullable()
      table.bigInteger('quantity_num').nullable()
      table.bigInteger('quantity_denom').nullable()
      table.string('i_acct', 32).nullable()
      table.bigInteger('i_price_num').nullable()
      table.bigInteger('i_price_denom').nullable()
      table.bigInteger('i_discount_num').nullable()
      table.bigInteger('i_discount_denom').nullable()
      table.string('invoice', 32).nullable()
      table.string('i_disc_type', 2048).nullable()
      table.string('i_disc_how', 2048).nullable()
      table.integer('i_taxable').nullable()
      table.integer('i_taxincluded').nullable()
      table.string('i_taxtable', 32).nullable()
      table.string('b_acct', 32).nullable()
      table.bigInteger('b_price_num').nullable()
      table.bigInteger('b_price_denom').nullable()
      table.string('bill', 32).nullable()
      table.integer('b_taxable').nullable()
      table.integer('b_taxincluded').nullable()
      table.string('b_taxtable', 32).nullable()
      table.integer('b_paytype').nullable()
      table.integer('billable').nullable()
      table.integer('billto_type').nullable()
      table.string('billto_guid', 32).nullable()
      table.string('order_guid', 32).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
