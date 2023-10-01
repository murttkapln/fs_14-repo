"use strict"
/*---------------------------------------------------------*
                        EXPRESS.JS
/*---------------------------------------------------------*/ 



/* ExpressJS Start*/

const express = require('express') // Assing express Framework to express variable
const app =express() // Run application on express

/* ENV */
require('dotenv').config()
const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || 8000
/*---------------------------------------------------------*/ 
/* HTTp_Methods & URLs */
app.get('/',(req,res)=>{
    //? run response.send for print-out
    res.send('Welcome to Express')
})












/*---------------------------------------------------------*/ 
// app.listen(PORT,()=>console.log(`Running on http://127.0.0.1:${PORT}`))
app.listen(PORT,HOST,()=>console.log(`Running on http://${HOST}:${PORT}`))
/*---------------------------------------------------------*/ 