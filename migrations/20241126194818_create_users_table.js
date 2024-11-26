/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
    await knex.schema.createTable('users', (table) => {
        table.uuid('id').primary()
        table.string('email').unique().notNullable()
        table.string('username').unique().notNullable()
        table.string('password')
        table.string('google_id')
        table.enum('role',['user','admin','manager']).defaultTo('user')
        table.enum('status',['active','inactive','banned','pending']).defaultTo('inactive')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
    await knex.schema.dropTable('users')
}
