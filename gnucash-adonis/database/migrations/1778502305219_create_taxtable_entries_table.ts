import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'taxtable_entries'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('taxtable', 32).notNullable()
      table.string('account', 32).notNullable()
      table.bigInteger('amount_num').notNullable()
      table.bigInteger('amount_denom').notNullable()
      table.integer('type').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
