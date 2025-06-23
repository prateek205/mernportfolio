const express = require("express");
const router = express.Router();
const {skill} = require("../controller/skillController");

router.get("/", skill);

module.exports = router;
