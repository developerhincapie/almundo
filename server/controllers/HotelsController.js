'use strict'
const dataHotels = require('../data/data.json');
const hotelModel = require('../models/HotelsModel');

    /**Function para traer todos los hoteles. */
    function getHotels(req, res) {
        res.status(200).send({
            status: 1,
            data: dataHotels
        });
    }

    /**Function para filtrar hoteles de el archivo data.json
     * Actualmente filtra por el nombre del hotel y por la Stars.
     */

    function filterHotels(req, res) {
        const params = req.body;
        if (params.name && params.stars) {
            const result = dataHotels.filter((h) => h.stars == params.stars && h.name == params.name);
            res.status(200).send({
                status: 1,
                data: result
            });
        } else if (params.name) {
            const result = dataHotels.filter((h) => h.name == params.name);
            res.status(200).send({
                status: 1,
                data: result
            });
        } else if (params.stars) {
            const result = dataHotels.filter((h) => h.stars == params.stars);
            res.status(200).send({
                status: 1,
                data: result
            });
        } else {
            res.status(200).send({
                status: 0,
                data: dataHotels
            });
        }
    }

    /**Function para guardar hoteles. */
    function storeHotels(req, res) {
        const params = req.body;
        hotelModel.create(params, (err, response) => {
            if (err) {
                res.status(500).send({
                    status: 0,
                    data: err
                });
            } else {
                res.status(200).send({
                    status: 1,
                    data: 'Hotel guardado exitosamente.'
                });
            }
        });
    }

     /**Function para actualizar hoteles. */
    function updateHotel(req, res) {
        const id_hotel = req.params.id;
        const params = req.body;
        hotelModel.findByIdAndUpdate(id_hotel, params, (err, response) => {
            if (err) {
                res.status(500).send({
                    status: 0,
                    data: err
                });
            } else {
                res.status(200).send({
                    status: 1,
                    data: 'Hotel editado exitosamente.'
                });
            }
        });
    }
  /**Function para eliminar hoteles. */
    function deleteHotel(req, res) {
        const id_hotel = req.params.id;
        const params = req.body;
        hotelModel.findByIdAndRemove(id_hotel, (err, response) => {
            if (err) {
                res.status(500).send({
                    status: 0,
                    data: err
                });
            } else {
                res.status(200).send({
                    status: 1,
                    data: 'Hotel eliminado exitosamente.'
                });
            }
        });
    }


module.exports = {
    getHotels,
    filterHotels,
    storeHotels,
    updateHotel,
    deleteHotel
}