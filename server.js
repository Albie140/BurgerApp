require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");

const burgersController = require("./controllers/burgers_controller.js");
const burger = require("./models/burger.js");

const app = express();
const PORT = process.env.PORT || 8080;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"))

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.use(burgersController);

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
})