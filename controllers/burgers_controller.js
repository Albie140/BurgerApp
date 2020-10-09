var express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();



//HTML Routes

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  

  burger.all(function (data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });

});
// Add a new burger
router.post("/burgers/create", function (req, res) {
  burger.insertOne(req.body.burger_name, function (res) {
    
    console.log(res);
    res.redirect("/");
  
  });
});
//Devour Burger
router.post('/burgers/eat', function (req, res) {
  burger.updateOne(req.body.id, function() {
    console.log(res)
    res.redirect('/');
  });
});

// router.put


// app.post("/burgers", (req, res) => {
// // let newBurger = req.body;
// // MySQL insert
// })

// app.put("/burgers/:id", (req, res) => {

//     // const chosen = req.params.id;= eat action
//     //MySQL update
// })

module.exports = router;