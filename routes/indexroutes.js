const express = require('express');

const router = express.Router();

const db = require('../config/db');

// HOME

router.get('/', (req, res) => {

    db.query(
        'SELECT * FROM testimonios ORDER BY id DESC',
        (err, testimonios) => {

            if (err) {

                console.log(err);

                return res.send('Error cargando testimonios');

            }

            res.render('home', {
                testimonios
            });

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

            if (err) {

                console.log(err);

                return res.send('Error guardando cita');

            }

            res.redirect('/');

        }

    );

});

// GUARDAR TESTIMONIO

router.post('/guardar-testimonio', (req, res) => {

    const { nombre, comentario } = req.body;

    const nuevoTestimonio = {

        nombre,
        comentario

    };

    db.query(

        'INSERT INTO testimonios SET ?',

        nuevoTestimonio,

        (err) => {

            if (err) {

                console.log(err);

                return res.send('Error guardando testimonio');

            }

            res.redirect('/');

        }

    );

});

module.exports = router;
