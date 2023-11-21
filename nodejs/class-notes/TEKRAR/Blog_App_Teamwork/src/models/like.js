"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */

// Like model:

const { mongoose } = require("../configs/dbConnection");

const LikeSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
  },
  { collection: "likes", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Like", LikeSchema);
