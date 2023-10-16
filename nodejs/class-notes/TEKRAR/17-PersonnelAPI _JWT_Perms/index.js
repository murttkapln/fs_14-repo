"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/

const express = require('express')
const app = express()

/* ------------------------------------------------------- */
//**********  Required Modules: ******************


//? envVariables to process.env
require('dotenv').config()
const PORT = process.env.PORT

//? asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
//**********  Configurations: ******************

//? Connect to DB:
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------------------------------- */
//**********  Middlewares: ******************
//? Accept JSON:
app.use('/', express.json())

//? SessionsCookies:
app.use(require('cookie-session')({secret: process.env.SECRET_KEY}))

//? res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

//? Login/Logout Control Middleware:
app.use(async(req,res,next)=>{

    const Personnel = require('./src/models/personnel.model')

    req.isLogin = false

    if(req.session?.id) {
        const user = await Personnel.findOne({_id:req.params.id})
        // if(user.password == req.session.password){
        //     req.isLogin = true
        // }
        req.isLogin = user.password == req.session.password
    }
    console.log('isLogin', req.isLogin);

    next()
})

/* ------------------------------------------------------- */
//**********  ROUTES: ******************
 //? Homepage:
 app.all('/',(req,res)=>{
    res.send({
        error:false,
        message: 'Welcome toPERSONNEL API',
        session: req.session,
        isLogin: req.isLogin,
    })
 })

 //?  /auth:
 app.use('/auth', require('./src/routes/auth.router'))

 //?  /departments:
 app.use('/departments', require('./src/routes/department.router'))
 
 //?  /personnels:
 app.use('/personnels', require('./src/routes/personnel.router'))




/* ------------------------------------------------------- */

//? errorHandler:
app.use(require('./src/middlewares/errorHandler'))

//? RUN SERVER:
app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')()