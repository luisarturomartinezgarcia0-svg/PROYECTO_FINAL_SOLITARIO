const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.localhost,
    user: process.env.root,
    database: process.env.jardin_de_daisiry
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('MySQL conectado');
    }
});

module.exports = connection;