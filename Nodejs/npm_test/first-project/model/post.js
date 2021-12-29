const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  // 타이틀에 스트링 값 설정
  title: String,
  // 컨텐츠에 스트링 값 설정
  content: String,
  // 언제 작성했는가?
  create_date: { type: Date, default: new Date() },
});

// 외부파일 설정하기 위한 exports

module.exports = mongoose.model("post", postSchema);
