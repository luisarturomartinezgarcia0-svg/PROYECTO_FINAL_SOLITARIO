const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  database: 'claudia',
  user: 'root',
  password: 'lilianat17'
});

db.connect((err) => {
  if (err) {
    console.log('Error al conectar:', err);
  } else {
    console.log('Conexión exitosa a MySQL');
  }
});

module.exports = db; 
