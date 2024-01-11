const PostSchema = require("../models/PostSchema.js");
const createPost = async (req, res) => {
  try {
    const { id, content } = req.body;
    const newPost = new PostSchema({ id, content });
    await newPost.save();

    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getPostAnalysis = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostSchema.findOne({id});
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const words = post.content.split(" ");
    const wordCount = words.length;
    const averageWordLength =
      words.reduce((total, word) => total + word.length, 0) / wordCount;
    res.json({ wordCount, averageWordLength });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  createPost,
  getPostAnalysis,
};
