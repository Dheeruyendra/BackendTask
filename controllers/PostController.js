
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

const getPostAnalysis = async (req, res) => {};

module.exports = { createPost, getPostAnalysis };