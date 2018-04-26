'use strict'
const dataHotels = require('../data/data.json');

function getHotels(req, res) {
    res.status(200).send({
        status: 1,
        data: dataHotels
    });
}


module.exports = {
    getHotels
}