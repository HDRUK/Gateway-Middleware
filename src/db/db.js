const { Pool } = require("pg");
const dbConnect = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: process.env.NODE_ENV === "production" ? true : false
});

module.exports = dbConnect;
