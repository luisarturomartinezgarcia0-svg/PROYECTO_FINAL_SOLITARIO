const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 5500);

app.engine('.hbs', exphbs.engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'src/views/layouts'),
    partialsDir: path.join(__dirname, 'src/views/partials')
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'src/views'));

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use(require('./src/routes/indexRoutes'));

// ERROR 404
app.use((req, res) => {
    res.status(404).send('Página no encontrada');
});

// SERVER
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto', app.get('port'));
});