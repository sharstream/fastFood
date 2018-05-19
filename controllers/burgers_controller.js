// MVC controller
var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

//get all burgers routes
router.get('/', (req, res) => {
    burger.all( data => {
        var handlebarObj = {
            burgers: data
        };
        console.log('data ' + data);
        console.log('handlebarObj ' + handlebarObj);
        res.render('index', handlebarObj);
    });
});

//insert a burger route
router.post('/api/burgers', (req, res) => {
    burger.create([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, req.body.devoured
    ], result => {
        // Send back the ID of the new burger
        res.json({ id: result.id });
    });
});

//update a burger route
router.put('/api/burgers/:id', (req, res) => {
    var condition = 'id = ' + req.params.id;

    console.log('condition ', condition);

    burger.update({
          devoured: reg.body.devoured
        },
        condition,
        result => {
          if (result.changedRows === 0) {
            return res.status(404).end();
          }
          res.status(200).end();
        }
    )
});

//delete a burger route
router.delete('/api/burgers/:id', (req, res) => {
    var condition = 'id = ' + req.params.id;

    burger.delete(
        condition,
        result => {
            if (result.affectedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    )
});

module.exports = router;