import knex from 'knex'
import config from '../../knexfile.js'

export const db = knex({
    client: 'pg',
    connection: config.development.connection,
})
