"use strict";
/* -------------------------------------------------------
EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
//***************   MODEL CREATE  *******************

const mongoose = require("mongoose");

/* ---------------------------------------------------  *
//? _id: AUTO CREATED

const nameSchema = new mongoose.Schema({

    //fieldName = String // Shorthand Using
    fieldName:{
        type: String, // Veri tipi
        default: null, // Default bir değer atayabiliriz.
        trim: true,// Gelern veriyi trim'den geçir: trim(data)
        select: true, // Shown/UnShow
        index: false, //  Daha hızlı erişim olsun mu?
        unique:false, // Benzersiz  kayıt olsun mu?
        // required: true,
        required: [true, 'Error-Message'],// JSON data içinde gelmesi zorunlu mu?
        enum : [[0,1,2,3],'Error-Message'],// Pattern/Constraint/Limit,Choices
        validate: [function() {return false}, 'Error-Message'],// Veriyi filtreden geçiren fonksiyon.
        get: function(data) {return false},//Veriyi Çağırırken çalıştırılacak fonks.
        set: function(data) {return false}, // Veriyi kaydederken çalıştırılacak fonks.


    },
},{
    collection:'Collection', // tablo adı ne olsun?
    timestamps: true, // Create and manage 'createdAt and updatedAt'
})

/* -------------------------------------------------------  */

// -------------------------------------------------------
//******  BLOG CATEGORY    ********
// -------------------------------------------------------
const blogCategorySchema = new mongoose.Schema({
  // _id:
  name:{
    type:String,
    trim:true,
    required:true
  }
},{
  collection: 'blogCategorİes',
  timestamps: true,
})



// -------------------------------------------------------
//******  BLOG POST    ********
// -------------------------------------------------------

const blogPostSchema = new mongoose.Schema(
  {
    //_id

    blogCategoryId: {
      type:mongoose.Schema.ObjectId, // Relational ObjectId
      required: true,
      ref: 'BlogCategory' // ModelName 
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
      type: String,
      trim: true,
      required: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
    // createdAt
    //updatedAt   // otomatik olarak eklenecek
  },
  {
    collection: "BlogPosts",
    timestamps: true,
  }
);

//? Alternatif 
// const BlogPostModel = mongoose.model('BlogPost', blogPostSchema)

// module.exports = {
//     // BlogCategory,
//     Blogpost: blogPostModel
// }

module.exports = {
    BlogCategory:mongoose.model('BlogCategory',blogCategorySchema),
    BlogPost: mongoose.model('BlogPost', blogPostSchema)
}