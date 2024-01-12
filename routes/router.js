const express = require("express");
const router = express.Router();
const {
  createPost,
  getPostAnalysis,
} = require("../controllers/PostController.js");

// Route to create a new post (HTTP POST request)
router.post("/api/v1/posts", createPost);

// Route to get analysis of a specific post by its ID (HTTP GET request)
router.get("/api/v1/posts/:id/analysis", getPostAnalysis); // get post analysis

module.exports = router;
