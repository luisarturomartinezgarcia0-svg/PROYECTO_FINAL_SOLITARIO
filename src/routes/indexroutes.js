const express = require('express');
const router = express.Router();

const db = require('../config/db');

// HOME
router.get('/', (req, res) => {

    db.query('SELECT * FROM menu_semanal', (err, menus) => {

        if (err) {
            console.log(err);
        }

        res.render('home', {
            menus
        });

    });

});

// GUARDAR CITA
router.post('/agendar-cita', (req, res) => {

    const {
        nombre_completo,
        cedula,
        telefono,
        correo
    } = req.body;

    const nuevaCita = {
        nombre_completo,
        cedula,
        telefono,
        correo
    };

    db.query('INSERT INTO citas SET ?', nuevaCita, (err) => {

        if (err) {
            console.log(err);
        }

        res.redirect('/');

    });

});

module.exports = router;