const express = require('express');
const router = express.Router();

const db = require('../config/db');

// HOME
router.get('/', (req, res) => {

    db.query(
        'SELECT * FROM testimonios ORDER BY id DESC LIMIT 3',
        (err, testimonios) => {

            if(err){
                console.log(err);
                return;
            }

            db.query(
                'SELECT * FROM menu_semanal',
                (err, menus) => {

                    if(err){
                        console.log(err);
                        return;
                    }

                    res.render('home', {
                        testimonios,
                        menus
                    });

                }
            );

        }
    );

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

    db.query(
        'INSERT INTO citas SET ?',
        nuevaCita,
        (err) => {

            if(err){
                console.log(err);
            }

            res.redirect('/');
        }
    );

});

// GUARDAR TESTIMONIO
router.post('/guardar-testimonio', (req, res) => {

    const { nombre, comentario } = req.body;

    db.query(
        'INSERT INTO testimonios(nombre, comentario) VALUES (?, ?)',
        [nombre, comentario],
        (err) => {

            if(err){
                console.log(err);
            }

            res.redirect('/');
        }
    );

});

module.exports = router;