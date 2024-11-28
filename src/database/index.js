import knex from 'knex';
import { config } from '../configs/index.js';

const db = knex({
    client: 'pg',
    connection: {
        host: config.postgres.host,
        port: config.postgres.port,
        user: config.postgres.user,
        password: config.postgres.password,
        database: config.postgres.database,
    },
});

export default db;  
