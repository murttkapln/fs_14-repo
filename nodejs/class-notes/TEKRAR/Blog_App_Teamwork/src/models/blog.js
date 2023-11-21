"use strict";
const { Category } = require("@mui/icons-material");
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
const category = require("./category");
/* ------------------------------------------------------- */

// Blog Model:

/* {
    "title": "title 2",
    "content": "content 2",
    "image": "image 2",
    "category": "655c6d7f0a6fe58b8a9dcc5f",
    "author": "655b56275a51b6c4beaaa772",
    "status": "p"
} */

/* ------------------------------------------------------- */
const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["p", "d"],
      default: "d",
    },
    category_name: {
      type: String,
      trim: true,
    },
    post_views: {
      type: Number,
      default: 0,
    },
    comments: [],
    comments_count: {
      type: Number,
      default: function () {
        return this.comments.lenght;
      },
      transform: function () {
        return this.comments.length;
      },
    },
    likes_n: {
      type: Array,
      default: [],
    },
    likes: {
      type: Number,
      default: function () {
        return this.likes_n.lenght;
      },
      transform: function () {
        return this.likes_n.length;
      },
    },
  },
  { collation: "blogs", timestamps: true }
);
/* ------------------------------------------------------- */

BlogSchema.pre('save', async function (next){
    
    // category alanına bağlı kategori bilgisini al:
    const category = await Category.findOne(this.category)
    
    // category_name'i belirle:
    this.category_name = category ? category.name : 'Default Category'
    
    // sonraki adıma geç
    next()
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('Blog', BlogSchema)