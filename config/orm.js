var connection = require("./connection.js");
var mysql = require("mysql");

console.log("  Made it to the orm.js");

module.exports = {
  selectAll: function(tableInput, cb) {
    console.log("orms.js - selectAll");
    console.log(tableInput); // burgers
    var query = 'SELECT * FROM ' + tableInput + ';';
    connection.query(query, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(tableInput, nameInput, cb) { 
    var query = "INSERT INTO " + tableInput + " (burger_name) VALUES (?)";
    connection.query(query, [nameInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableInput, idInput, cb) {
    var query = "UPDATE " + tableInput + " SET devoured = 1  WHERE id = ?";
    connection.query(query, [idInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};