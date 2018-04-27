'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');


mongoose.Promise = global.Promise;
mongoose.connect(config.db.url);


app.listen(config.port,  (() => {
    console.log('server corriendo');
}));
