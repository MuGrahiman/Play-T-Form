const morgan = require("morgan");
const express = require("express");
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../Public"));
app.use("/css", express.static(path.join(__dirname, "../Public/CSS")));
app.use("/img", express.static(path.join(__dirname, "../Public/IMG")));
app.use("/js", express.static(path.join(__dirname, "../Public/JS")));

app.set("views", path.join(__dirname, "Views"));
app.set("layout", path.join(__dirname, "Views/layout.ejs"));
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => res.send("server working successfully"));

const routes = require("./Routes/router");
app.use("/api", routes);

module.exports = app;
