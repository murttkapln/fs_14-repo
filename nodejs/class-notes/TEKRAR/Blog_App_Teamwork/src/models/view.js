"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

// Vİew Model:

const ViewSchema = new mongoose.Schema(
  {
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    viewedBy: {
      type: Array,
      default: [],
    },
  },
  { collection: "views", timestamps: true }
);

/* ------------------------------------------------------- */

module.exports = mongoose.model('View', ViewSchema)