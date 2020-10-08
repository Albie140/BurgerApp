var express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// Pull form database! 
// const burgers = [
//     {
        
//     },
//     {
        
//     },
//     {
        
//     },
    
// ]

//Go in controller file
//HTML Route
// app.get("/", (req, res) => {
//     res.render("index", {
//         burgers: burgers
//     });
// });
app.get("/api/burgers", (req, res) => {
// MySQL select
     //MySQL retrieves burgers array from DB
    // res.json(burgers) should be coming from mySQL
    connection.query("SELECT * FROM burgers", function(err, data) {
        if(err)
          throw err;
    
        console.log(data);
    
        res.render("index", { burgers: data });
      });

})


// Add a new burger
// app.post("/api/burgers", (req, res) => {
// // let newBurger = req.body;
// // MySQL insert
// })

// app.put("/api/burgers/:id", (req, res) => {
   
//     // const chosen = req.params.id;= eat action
//     //MySQL update
// })

module.exports = router