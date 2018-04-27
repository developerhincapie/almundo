'use strict';

const config = {
    port: process.env.PORT || 3000,
    db: {
        url: 'mongodb://test:test@ds259089.mlab.com:59089/test-almundo'
    }
};

module.exports = config;