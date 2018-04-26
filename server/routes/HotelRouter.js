'use strict'

const express = require('express');
const hotelsController = require('../controllers/HotelsController');


const api = express.Router();
api.get('/hotels', hotelsController.getHotels);

module.exports = api;