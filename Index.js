require('./config/db');
require('dotenv').config();


const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

// CONFIGURACIÓN
app.set('port', process.env.PORT || 9000);

// HANDLEBARS
app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));

app.set('view engine', '.hbs');

app.set('views', path.join(__dirname, 'views'));

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ARCHIVOS PUBLICOS
app.use(express.static(path.join(__dirname, 'public')));

// RUTA PRINCIPAL
app.get('/', (req, res) => {
    res.render('home');
});

// SERVIDOR
app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en puerto ${app.get('port')}`);
});