require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
  host:     process.env.DB_HOST     || 'localhost',
  database: process.env.DB_NAME     || 'jardin_de_daisiry',  
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASSWORD || '02161800'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err.message);
  } else {
    console.log('Conexión exitosa a MySQL');
  }
});

module.exports = db;
