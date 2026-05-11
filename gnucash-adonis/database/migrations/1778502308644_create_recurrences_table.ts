import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'recurrences'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('obj_guid', 32).notNullable()
      table.integer('recurrence_mult').notNullable()
      table.string('recurrence_period_type', 2048).notNullable()
      table.date('recurrence_period_start').notNullable()
      table.string('recurrence_weekend_adjust', 2048).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
