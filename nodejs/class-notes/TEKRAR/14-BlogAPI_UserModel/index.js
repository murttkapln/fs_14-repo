"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
/*
 * $ npm init -y
 * $ npm i express dotenv express-async-errors
 * $ npm i mongoose
*/

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000
/* ------------------------------------------------------- */
app.use(express.json())

//? Conntect to MongoDB with Mongoose
require('./src/dbConnection') // DB connection Route'a göre yukarıda olmalı. 

//? HomePage
app.all('/',(req,res)=>{ // ana URL'e gelen tüm metodlara izin verir.
    res.send('WELCOME TO BLOG API')
})

//? Routes:
app.use('/user', require('./src/routes/userRoute'))
app.use('/blog',require('./src/routes/blogRoute'))
/* ------------------------------------------------------- */

//? synchronization
// require('./src/sync')()

/* ------------------------------------------------------- */
//? Error Handler:
app.use(require('./src/errorHandler'))

//? PORT
app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))