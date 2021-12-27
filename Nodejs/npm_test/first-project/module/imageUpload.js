const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
// dest 목적지를 의미한다
// uploads/ 라는 위치에 파일을 업로드한다

module.exports = upload;
