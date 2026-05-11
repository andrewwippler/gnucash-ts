import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'slots'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('obj_guid', 32).notNullable()
      table.string('name', 4096).notNullable()
      table.integer('slot_type').notNullable()
      table.bigInteger('int64_val').nullable()
      table.string('string_val', 4096).nullable()
      table.double('double_val').nullable()
      table.dateTime('timespec_val').nullable().defaultTo('1970-01-01 00:00:00')
      table.string('guid_val', 32).nullable()
      table.bigInteger('numeric_val_num').nullable()
      table.bigInteger('numeric_val_denom').nullable()
      table.date('gdate_val').nullable()
      table.index(['obj_guid'], 'slots_guid_index')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
