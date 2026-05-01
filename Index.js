const express = require ('express')
const path = require('path')
const exhbs = require('express-handlebars')
const app = express()
const port = process.env.PORT || 3000


app.engine('handlebars', exhbs.engine({
    partailsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts'),
    defaultLayout: 'main handlebars'
    }) 

),app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})