'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const hotelsRoutes = require('./routes/HotelRouter');

const distDir = __dirname + '/../dist/client';
app.use(express.static(distDir));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Agregamos cors en la cabecera de nuestra api.*/
app.use(cors());
/**Creamos una ruta para llamada Api para referenciar la api de esa forma. */
app.use('/api', hotelsRoutes);

module.exports = app;