const mongoose = require("mongoose");
const { Schema } = mongoose;

// Defining the Post schema with id and content fields
const PostSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Creating and exporting the Post model based on the defined schema
module.exports = mongoose.model("Post", PostSchema);