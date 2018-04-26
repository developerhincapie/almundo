'use strict'

const express = require('express');
const hotelsController = require('../controllers/HotelsController');


const api = express.Router();
api.get('/hotels', hotelsController.getHotels);
api.post('/search-hotels', hotelsController.filterHotels);

/**Crud Hotels */
api.post('/store-hotels', hotelsController.storeHotels);
api.put('/update-hotels/:id', hotelsController.updateHotel);
api.delete('/delete-hotels/:id', hotelsController.deleteHotel);

module.exports = api;