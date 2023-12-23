const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");

dotenv.config();
const app = express();

app.use(express.static("Public"));
app.use("/css", express.static(__dirname + "Public/CSS"));
app.use("/img", express.static(__dirname + "Public/IMG"));
app.use("/js", express.static(__dirname + "Public/JS"));

app.use(express.urlencoded({ extended: true }));
app.set("views", "./Views");
app.set("view engine", "ejs");

app.get("/", (req, res) => res.send("server working successfully"));

const routes = require("./Routes/router");
app.use("/api", routes);



module.exports = app;