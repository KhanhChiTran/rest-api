const express = require("express");
const app = express();
const db = require("./db");
const UserController = require("./user/UserController");
const router = require("./user/UserController");
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", UserController);

app.listen(port, console.log("Express server listening on port " + port));
