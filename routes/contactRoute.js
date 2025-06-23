const express = require("express");
const route = express.Router();
const { savedContact } = require("../controller/contactController");

route.post("/", savedContact);

module.exports = route;
