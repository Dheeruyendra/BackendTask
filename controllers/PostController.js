const PostSchema = require("../models/PostSchema.js");
const { analyzePostContent } = require("../service/PostAnalysisService.js");
const redis = require("redis");

const { createClient } = require("redis");

const redisClient = createClient();

redisClient.connect().catch(console.error);

redisClient.on("error", (err) => console.log("Redis Client Error", err));

//Handler for creating a new post
const createPost = async (req, res) => {
    try {
        //Extracting id and content from the request body
        const { id, content } = req.body;

        //Creating a new post instance using the PostSchema
        const newPost = new PostSchema({ id, content });
        //Saving the post to the database
        await newPost.save();

        res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

//Handler for getting analysis of a post
const getPostAnalysis = async (req, res) => {
    try {
        const { id } = req.params;
        const cachedAnalysis = await redisClient.get(id);
        if (cachedAnalysis) {
            return res.status(200).json(JSON.parse(cachedAnalysis));
        }
        //Finding the post in the database using the id
        const post = await PostSchema.findOne({ id });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        //Analyzing the post content using the PostAnalysisService
        const analysisResult = analyzePostContent(post.content);
        await redisClient.set(id, JSON.stringify(analysisResult));
        res.status(200).json(analysisResult);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    createPost,
    getPostAnalysis,
};
