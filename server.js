require("dotenv").config();
const mysql = require("mysql");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: ""
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

// Pull form database! Below is an example...
const burgers = [
    {
        id: 1,
        name: "Bacon Burger",
        devoured: false
    },
    {
        id: 2,
        name: "Veggie Burger",
        devoured: false
    },
    {
        id: 3,
        name: "Cheese Burger",
        devoured: false
    },
    {
        id: 4,
        name: "Turkey Burger",
        devoured: false
    }

]

//Go in controller file
//HTML Route
app.get("/", (req, res) => {
    res.render("index", {
        burgers: burgers
    });
});
app.get("/api/burgers", (req, res) => {
// MySQL select
     //MySQL retrieves burgers array from DB
    // res.json(burgers) should be coming from mySQL

})


// Add a new burger
app.post("/api/burgers", (req, res) => {
// let newBurger = req.body;
// MySQL insert
})

app.put("/api/burgers/:id", (req, res) => {
   
    // const chosen = req.params.id;= eat action
    //MySQL update
})



app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
})