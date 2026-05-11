import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'gnclock'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('Hostname', 255).nullable()
      table.integer('PID').nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
