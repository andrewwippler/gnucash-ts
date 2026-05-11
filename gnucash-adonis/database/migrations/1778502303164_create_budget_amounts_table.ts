import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'budget_amounts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('budget_guid', 32).notNullable()
      table.string('account_guid', 32).notNullable()
      table.integer('period_num').notNullable()
      table.bigInteger('amount_num').notNullable()
      table.bigInteger('amount_denom').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
