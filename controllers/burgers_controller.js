var express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

//HTML Routes

// router.get("/", function (req, res) {
//   res.redirect("/burgers");
// });

router.get("/", function (req, res) {

  burger.all(function (data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });

});
// Add a new burger
router.post("/burgers", function (req, res) {
  burger.create(req.body.burger_name, function (res) {
    console.log(res);
    res.redirect("/");

  });
});
//Devour Burger
router.put("/burgers", function (req, res) {
  burger.update(req.body.id, function () {
    console.log(res)
    res.redirect("/");
  });
});


module.exports = router;