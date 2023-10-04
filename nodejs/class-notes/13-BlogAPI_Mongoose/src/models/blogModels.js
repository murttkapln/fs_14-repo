"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

/*----------------------------------------------------- *
const nameSchema= new mongoose.Schema({
    // _id:    // AUTO CREATED

    // fieldName: String // Shorthand Using
    fieldName: {
        type:String, // Veri Tipi
        default: null, // Default bir değer tanımlayabiliriz.
        trim: true, // Gelen veriyi trim'den geçir: trim(data)
        select: true, // Show/UnShow
        index: true, // Daha hızlı erişim olsun mu ?
        unique: false, // Benzersiz kayıt olsun mu?
        // required: true,
        required: [true, 'Error-Message'],
        enum: [[0,1,2,3], 'Error-Message'], // Pattern/Constraint/Limit/Choices
        validate:[function(data){return true},'Error-Message'], // Veriyi filtreden geçiren fonksiyon
        get: function(data) {return true}, // Veri çağırırken çalıştırılacak fonksiyon
        set: function(data) {return true},// Veri kaydederken çalıştırılacak fonksiyon


    }

},{
    collection: 'collectionName', // tablo ismi ne olsun ?
    timestamps: true, // Create and Manage 'createdAt' and 'updatedAt'
})

/*----------------------------------------------------- */

const blogPostSchema = new mongoose.Schema(
  {
    // _id

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
    // updatedAt
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);

// const BlogPostModel = mongoose.model('BlogPost', blogPostSchema)

// module.exports= {
//     // BlogCategory:
//     BlogPost:BlogPostModel

// }

MicOutlined.exports = {
    // BlogCategory:
    BlogPost: mongoose.model('BlogPost', blogPostSchema)
}