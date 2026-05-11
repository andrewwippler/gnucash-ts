import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'schedxactions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('guid', 32).notNullable().primary()
      table.string('name', 2048).nullable()
      table.integer('enabled').notNullable()
      table.date('start_date').nullable()
      table.date('end_date').nullable()
      table.date('last_occur').nullable()
      table.integer('num_occur').notNullable()
      table.integer('rem_occur').notNullable()
      table.integer('auto_create').notNullable()
      table.integer('auto_notify').notNullable()
      table.integer('adv_creation').notNullable()
      table.integer('adv_notify').notNullable()
      table.integer('instance_count').notNullable()
      table.string('template_act_guid', 32).notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
