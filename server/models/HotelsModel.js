'use strict'

const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp-plugin');
const Schema = mongoose.Schema;


const HotelSchema = Schema({
    id: String,
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: String
});


HotelSchema.plugin(timestamp, {
    createdName: 'created_at',
    updatedName: 'updated_at',
    disableCreated: false,
    disableUpdated: false
});


module.exports = mongoose.model('hotels', HotelSchema)