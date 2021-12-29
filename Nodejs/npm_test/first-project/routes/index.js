var express = require("express");
const { trusted } = require("mongoose");
var router = express.Router();

/* GET home page. */

const postModel = require("../model/post");

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });
  try {
    const result = await post.save();
    res.status(200).json({
      message: "Upload success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// 전체게시물 조회하기

router.get("/", async (req, res) => {
  try {
    const result = await postModel.find({});
    res.status(200).json({
      message: "read sucecess!!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// 하나의 게시물 가져오기

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postModel.findById(id);
    res.status(200).json({
      message: "date !! sucess",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// 업데이트 구현하기

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(
      id,
      {
        title: title,
        content: content,
      },
      {
        new: true,
      },
    );
    res.status(200).json({
      message: "update success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// delete 구현하기

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Delete Success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
