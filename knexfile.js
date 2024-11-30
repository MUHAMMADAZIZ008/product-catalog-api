import { config as envConfig } from './src/configs/index.js'

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config = {
    development: {
        client: 'pg',
        connection: {
            host: envConfig.postgres.host,
            user: envConfig.postgres.user,
            password: envConfig.postgres.password,
            database: envConfig.postgres.database,
            port: envConfig.postgres.port,
        },
        migrations: {
            directory: './migrations',
        },
        seeds: {
            directory: './seeds',
        },
    },

    staging: {
        client: 'pg',
        connection: {
            host: 'staging-host',
            database: 'staging_database',
            user: 'staging_user',
            password: 'staging_password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './migrations',
        },
    },

    production: {
        client: 'pg',
        connection: {
            host: 'production-host',
            database: 'production_database',
            user: 'production_user',
            password: 'production_password',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './migrations',
        },
    },
}

export default config
