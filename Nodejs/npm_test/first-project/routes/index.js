var express = require("express");
var router = express.Router();

/* GET home page. */

router.post("/main", (req, res) => {
  const data = req.body.data;
  res.render("index", { title: "title" }); // json을 응답으로 전달한다.
});

module.exports = router;
