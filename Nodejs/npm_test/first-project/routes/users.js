var express = require("express");
var router = express.Router();

const userInfo = {
  lee: {
    password: "123123",
  },
  kim: {
    password: "456456",
  },
};
/*
로그인코드
*/

router.get("/", (req, res) => {
  const session = req.session;
  res.render("index", {
    username: session.username,
  });
});

/* 로그인 기능 구현 */

router.get("/login/:username/:password", (req, res) => {
  const session = req.session;
  const { username, password } = req.params;

  // user info가 없을 경우
  if (!userInfo[username]) {
    res.status(400).json({
      message: "user not found",
    });
  }

  // user info가 존재 할 경우
  if (userInfo[username]["password"] === password) {
    session.username = username;
    res.status(200).json({
      message: "user login",
    });
  }
  // password가 일치하지 않을 경우
  else {
    res.status(404).json({
      message: "user password wrong",
    });
  }
});

/* 로그아웃 기능 구현 */

router.get("/logout", (req, res) => {
  const session = req.session;
  if (session.username) {
    req.session.destroy(err => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/users");
      }
    });
  } else {
    res.redirect("/users");
  }
});

module.exports = router;
