const express = require("express");
const router = express.Router();
const registerUser = require("./UserController");

router.route("/userinfo").post(registerUser);

module.exports = router;
