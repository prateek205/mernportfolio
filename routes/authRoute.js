const express = require("express")
const Route = express.Router()
const {login, register} = require("../controller/authController")

Route.post("/register", register)
Route.post("/login", login)

module.exports = Route