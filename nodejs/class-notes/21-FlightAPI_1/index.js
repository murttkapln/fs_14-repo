"use strict"
/* -------------------------------------------------------
   * EXPRESS - FLIGHT API
------------------------------------------------------- */

//* $ npm init -y
//* $ npm i express
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
//* npm i dotenv
// Required Modules:
require('dotenv').config()
const PORT = process.env.PORT || 8000

//* $ npm i express-async-errors
// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
// Middlewares:
// Accept JSON
app.use(express.json())
/* ------------------------------------------------------- */

// Routes:

// HomePath:
app.all('/',(req,res)=>{
   res.send({
      error:false,
      message: 'Welcome to FLIGHT API'
   })
})

// auth:
app.use('/auth', require('./src/routes/auth.rotes'))
// user:
app.use('/users', require('./src/routes/user.routes'))



/* ------------------------------------------------------- */
// errorHandler:
app.use(require('./src/middlewares/errorHandler'))


// RUN SERVER:
/* ------------------------------------------------------- */
app.listen(PORT,()=>console.log('Running on http://127.0.0.1:'+ PORT))