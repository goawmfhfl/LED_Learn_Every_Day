var express = require("express");
var router = express.Router();
const loginCheck = require("../module/loginCheck");

/* GET home page. */

router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login suceess",
  });
});

module.exports = router;
