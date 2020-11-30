const router = require("express").Router();
const { Post } = require("../models/offer");

router.post("/add", (req, res) => {
  const post = new Post(req.body);
  console.log(post);
  post.save((err) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.get("/", (req, res) => {
  Post.find().exec((err, posts) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, posts });
  });
});

module.exports = router;
