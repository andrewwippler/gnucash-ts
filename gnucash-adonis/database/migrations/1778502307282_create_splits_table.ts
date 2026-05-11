import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'splits'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('tx_guid', 32).notNullable()
      table.string('account_guid', 32).notNullable()
      table.string('memo', 2048).notNullable()
      table.string('action', 2048).notNullable()
      table.string('reconcile_state', 1).notNullable()
      table.dateTime('reconcile_date').nullable().defaultTo('1970-01-01 00:00:00')
      table.bigInteger('value_num').notNullable()
      table.bigInteger('value_denom').notNullable()
      table.bigInteger('quantity_num').notNullable()
      table.bigInteger('quantity_denom').notNullable()
      table.string('lot_guid', 32).nullable()
      table.index(['tx_guid'], 'splits_tx_guid_index')
      table.index(['account_guid'], 'splits_account_guid_index')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
