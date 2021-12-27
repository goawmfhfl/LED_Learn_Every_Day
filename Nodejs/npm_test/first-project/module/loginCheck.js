const loginCheck = (req, res, next) => {
  const userLogin = true;
  // 만약 User가 로그인이 되어있다면?
  // next메서드 실행
  if (userLogin) {
    next(); //
  } else {
    res.status(400).json({
      message: "Login Fail",
    });
  }
};

module.exports = loginCheck;
