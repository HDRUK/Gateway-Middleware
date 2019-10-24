const { Pool } = require("pg");
const dbConnect = new Pool({
    /* eslint-disable */
    // eslint is reporting - 'process' is not defined  no-undef
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
    /* eslint-enable */
});

module.exports = dbConnect;
