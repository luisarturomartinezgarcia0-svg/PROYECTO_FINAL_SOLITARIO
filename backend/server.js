const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const rutas = require('./route');
app.use('/api', rutas);

app.use(express.static(path.resolve(__dirname, '../frontend')));

app.listen(3000, () => {
  console.log('Servidor activo en http://localhost:3000');
});
