// index.js

/**
 * Required External Modules
*/

const express = require("express");
const path = require("path");
/**
 * App Variables
*/

const app = express();
const port = process.env.port || "8080";

/**
 *  App Configuration
*/

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
*/

app.get("/", (req, res) => {
    res.render("template-page", {title: "Home"});
});

/**
 * Server Activation
*/

app.listen(port, () => {
    console.log("Hello World");
});