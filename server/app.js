'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const hotelsRoutes = require('./routes/HotelRouter');

app.use(bodyParser.json());
console.log('')

/* Agregamos cors en la cabecera de nuestra api.*/
app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Headers', 'Authorizacion, X-API-KEY, Origin, X-Requested-with, Content-Type, Accept, Access-Control-Allow-Request-Method');
    req.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS,PUT,DELETE');
    req.header('Allow', 'GET, POST, OPTIONS,PUT,DELETE');
    next();
});
/**Creamos una ruta para llamada Api para referenciar la api de esa forma. */
app.use('/api', hotelsRoutes);

module.exports = app;