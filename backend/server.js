require('dotenv').config();
const express = require('express');
const path    = require('path');
const cors    = require('cors');
const db      = require('./conexion');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve the frontend
app.use(express.static(path.resolve(__dirname, '../frontend')));

// Health check
app.get('/api/health', (req, res) => {
  db.query('SELECT 1', (err) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Database unreachable' });
    }
    res.json({ status: 'ok', database: 'connected' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
