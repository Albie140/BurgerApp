var orm = require("../config/orm.js");

//Uses orm to modify burger database

var burger = {
//getting info from sql database
    all: function (cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    
    create: function(cols, vals, cb){
        orm.insertOne("burgers",cols, vals, function(res) {
            cb(res);
        }); 
    },
 

    update: function(id, cb) {
        var condition ="id=" + id
        orm.updateOne("burgers", {devoured: true}, condition, function(res) {
            cb(res);
        });
    }
}



module.exports = burger;