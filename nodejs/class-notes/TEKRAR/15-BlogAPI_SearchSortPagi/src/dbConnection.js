"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");


// const MONGODB = process.env.MONGODB || 'mongodb://127.0.0.1:27017/blogAPI'
// mongoose.connect(MONGODB)

mongoose.connect(process.env.MONGODB || "mongodb://127.0.0.1:27017/").then(()=> console.log(' * DB CONNECTED *')).catch(()=>console.log(' * DB NOT CONNECTED *', err))
