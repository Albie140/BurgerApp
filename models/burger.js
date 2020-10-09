var orm = require("../config/orm.js");

//Uses orm to modify burger database

var burger = {
//getting info from sql database
    all: function (cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    
    create: function(cb, val){
        orm.insertOne("burgers", "burger_name", val, cb) 
    },

    update: function(burger_id, cb){
        orm.updateOne("burgers", {devoured: true}, burger_id, cb)
    }
}



module.exports = burger;