const express = require('express');
const router = express.Router();
const db = require('./conexion');

router.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuario';

  db.query(sql, (err, resultados) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error en la base de datos');
    } else {
      res.json(resultados);
    }
  });
});

router.post('/usuarios', (req, res) => {
  const { nombre, email, descripcion } = req.body;

  const sql = `
    INSERT INTO usuario (nombre, Email, descripcion)
    VALUES (?, ?, ?)
  `;

  db.query(sql, [nombre, email, descripcion], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error al guardar');
    } else {
      res.send('Usuario guardado correctamente');
    }
  });
});


module.exports = router;
