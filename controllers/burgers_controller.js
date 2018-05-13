var express = require('express');

var burgers = require('../models/burger.js');

var app = express();

var router = (app) => {
    //get all burgers routes
    app.get('/', (req, res) => {

    });

    //insert a burger route
    app.get('/api/burgers', (req, res) => {

    });

    //update a burger route
    app.put('/api/burgers:id', (req, res) => {

    });

    //delete a burger route
    app.delete('/api/burgers:id', (req, res) => {

    });
}

module.exports = router;