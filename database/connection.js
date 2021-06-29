const { Pool, Client } = require('pg')
let pool;

try {
    pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
    })
} catch (e) {
    console.error(`The following error: ${e} 
    happened while trying to connect to the database in connection.js`);
}



module.exports = pool;