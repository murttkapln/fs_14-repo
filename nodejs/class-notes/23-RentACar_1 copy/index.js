"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | RENT_A_CAR_API
------------------------------------------------------- */
const express = require('express')
const app = express()

/* ------------------------------------------------------- */
//* Required Modules:

// envVariables to process.env:
require('dotenv').config()
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
//* Configrations:

// Connect to DB:
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
//* Middlewares:

// Accept JSON:
app.use(express.json())


/* ------------------------------------------------------- */
//* Routes:

// HomePath:
app.all('/',(req,res)=>{
    res.send({
        error:false,
        message: 'Welcome to Rent a Car API',
        documents: '/documents',
        user: req.user
    })
})


/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

//* RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()