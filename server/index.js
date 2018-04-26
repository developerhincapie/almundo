'use strict'

const mongoose = require('mongoose');
const app = require('./app');
//const config = require('./config');
const port = process.env.PORT || 3000;


/*mongoose.Promise = global.Promise;
mongoose.connect(config.db.url);*/


app.listen(port,  (() => {
    console.log('server corriendo');
}));
