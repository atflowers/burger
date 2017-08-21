var orm = require("../config/orm.js");

console.log(" Made it to burger.js");

// Call the ORM functions using burger specific input for the ORM
var burgers = {
  findAll: function(cb) {
    console.log("burger.js findAll initiated");
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },
  addBurger: function(nameInput, cb){
    orm.insertOne("burgers", nameInput, cb);
  },
  devourBurger: function(inputId, cb){
    orm.updateOne("burgers", inputId, cb);
  }
};

module.exports = burgers;