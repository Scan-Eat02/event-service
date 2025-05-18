const { Pool } = require('pg');
const config = require('../config');
const { UnknownError } = require('../exceptions');

// Create the pool with CockroachDB-specific configurations
const cockroach = new Pool({
    user: config.cockroach.username,
    host: config.cockroach.host,
    database: config.cockroach.dbName,
    password: config.cockroach.password,
    port: config.cockroach.port,
    poolSize: config.cockroach.poolSize,
    // isSSL: config.cockroach.ssl,
});

// Make all DBs here
const makeEventsDb = require('./eventsdb');
const eventsDb = makeEventsDb({ cockroach, UnknownError });

const makeStoreRequestsDb = require('./storerequests');
const storeRequestsDb = makeStoreRequestsDb({ cockroach, UnknownError });

// Export all DBs
const dbs = {
    eventsDb,
    storeRequestsDb,
};
module.exports = { cockroach, ...dbs };
