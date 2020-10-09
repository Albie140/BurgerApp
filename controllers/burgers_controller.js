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
router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  burger.create("burger_name", req.body.burger_name, function (result) {
    console.log(result);
    res.json(result);

  });
});
//Devour Burger
router.put("/api/burgers/:id", function (req, res) {
  burger.update(req.params.id, function () {
    console.log(res)
    res.sendStatus(200);
  });
});

module.exports = router;