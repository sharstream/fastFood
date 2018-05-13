var orm = require("../config/orm.js");

// Find all the burgers ordering by the burger name.
orm.selectAll("burgers_db", "burger_name", "devored");

// Insert a new burger in the petsburgers table.
orm.insertOne("burgers_db", "burgers", "New Burger", true);

// Find a burger and then update it.
orm.updateOne("burgers_db", "burgers", 3, "Taco", "New Taco", false);

module.exports = orm;