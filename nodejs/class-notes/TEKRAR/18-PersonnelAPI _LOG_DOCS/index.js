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

//? Logging:
//* npm i morgan
// https://expressjs.com/en/resources/middleware/morgan.html
const morgan = require('morgan')
// console.log(morgan);
// app.use(morgan('combained'))
//  app.use(morgan('IP:remote-addr TIME:[:date[clf]] REQ:":method :url HTTP/:http-version" RES::status :res[content-length] APP:":user-agent"'))


 //? Write logs to file:
// const fs = require('node:fs')
// app.use(morgan('combined', {
//     stream: fs.createWriteStream('./access.log', { flags: 'a' })
// }))


const fs = require('node:fs')
const now = new Date()
const today = now.toISOString().split('T')[0]
app.use(morgan('combined', {
    stream: fs.createWriteStream(`./logs/${today}`, { flags: 'a' })
}))




//? Accept JSON:
app.use('/', express.json())

//? SessionsCookies:
app.use(require('cookie-session')({secret: process.env.SECRET_KEY}))

//? res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

//? Cookie:Login/Logout Control Middleware:
// app.use(async(req,res,next)=>{

//     const Personnel = require('./src/models/personnel.model')

//     req.isLogin = false

//     if(req.session?.id) {
//         const user = await Personnel.findOne({_id:req.params.id})
//         // if(user.password == req.session.password){
//         //     req.isLogin = true
//         // }
//         req.isLogin = user.password == req.session.password
//     }
//     console.log('isLogin', req.isLogin);

//     next()
// })

// * Moved => middlewares/authentication.js

// const jwt = require('jsonwebtoken')

// app.use((req,res,next)=>{
//     const auth = req.headers?.authorization || null // get Authorization
//     const accessToken = auth ? auth.split(' ')[1] : null // get JWT

//     jwt.verify(accessToken, process.env.SECRET_KEY, function(err,user){
//         if(err){
//             req.user = null
//             console.log('JWT Login: NO');

//         }else{
//             //re.user = user
//             req.user = user.isActive ? user : null
//         }
//     })
//     next()
// })


app.use(require('./src/middlewares/authentication'))

/* ------------------------------------------------------- */
//**********  ROUTES: ******************
 //? Homepage:
 app.all('/',(req,res)=>{
    res.send({
        error:false,
        message: 'Welcome toPERSONNEL API',
        // session: req.session,
        isLogin: req.isLogin,
        user: req.user
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