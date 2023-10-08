"use strict";
/* -------------------------------------------------------
EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({
    //? _id: AUTO CREATED

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