// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // Display all burgers in db
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  // Add new burger to db 
  create: function (cols, vals, cb) {
    orm.create("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  // Change to devoured status to true
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },

  // Delete burger from db
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;