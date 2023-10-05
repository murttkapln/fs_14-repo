"use strict";
/* -------------------------------------------------------
EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

/* ------------------------------------------------------- *
const nameSchema = new mongoose.Schema(
  {
    // _id: // AUTO CREATED
    
    // fieldName: String // Shorthand using
    fieldName: {
      type: String, //Veri tipi
      default: null, // Default bir değer atayabiliriz.
      trim: true, //Gelen  veriyi trim'den geçir: trim(data)
      select: true, // Show/UnShow
      index: false, // Daha hızlı erişim olsun mu?
      unique: false, // Benzersiz kayıt olsun mu?
      // required: true,
      required: [true, "Error-Message"], //JSON data içinde gelmesi zorunlu mu?
      enum: [[0, 1, 2, 3], "Error-Message"], // Pattern/Constraint/limit/Chioces
      validate: [
        function (data) {
          return true;
        },
        "Error-Message",
      ], //  Veriyi filtreden geçiren fonksiyon.
      get: function (data) {
        return true;
      }, // Veri çağırırken çalıştırılacak fonksiyon
      set: function (data) {
        return true;
      }, // Veri kaydederken çalıştırılcak fonksiyon
    },
  },
  {
    collection: "collectionName", // tablo adı ne olsun?
    timestamps: true, // Create and Manage 'createdAt' and 'updatedAt'
  }
);

/* ------------------------------------------------------- */

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      require: true,
    },
    content: {
      type: String,
      trim: true,
      require: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
    // createdAt
    //updatedAt
  },
  {
    collection: "BlogPosts",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */
// const BlogPostModel = mongoose.model('BlogPost', blogPostSchema)
// module.exports={
//     // BlogCategory:
//     BlogPost: BlogPostModel
// }



module.exports = {
    // BlogCategory:
    BlogPost: mongoose.model('BlogPost', blogPostSchema)
}

/* ------------------------------------------------------- */
