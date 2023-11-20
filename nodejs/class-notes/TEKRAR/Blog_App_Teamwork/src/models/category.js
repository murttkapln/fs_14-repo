"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */

const { mongoose } = require("../config/dbConnection");
/* ------------------------------------------------------- */

// Category Model:

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  { collection: "categories", timestamps: true }
);

/* ------------------------------------------------------- */

module.exports = mongoose.model('category', CategorySchema)
