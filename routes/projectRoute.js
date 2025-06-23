const express = require("express")
const route = express.Router()
const {dataList} = require("../controller/projectController")

route.get("/",dataList)


module.exports = route