
require('dotenv').config()
const mysql = require('mysql2/promise'); // import mysql2 module for database connection

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     port: process.env.DB_PORT || 3306,
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
module.exports = connection; // export the connection to use in other files