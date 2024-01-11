const express = require('express');
const router = express.Router();
const { createPost, getPostAnalysis } = require('../controller/PostController.js');

router.post('/api/v1/posts', createPost); // create a post
router.get('/api/v1/posts/:id/analysis', getPostAnalysis); // get post analysis


module.exports = router;