"use strict";

/* ---------------------------------------------- 
           EXPRESS _ MIDDLEWARES
---------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;
/* ---------------------------------------------- *
//? Middleware functions  must be have minimum three parameters.
//? Last parameter for next()

//* MIDDLEWARE:

app.get('/',(req,res,next)=>{
    //? Request/Response parametresi ile next() metoduna veri gönderebilirim.
    req.customData= "Custom Data" // 
    res.customDataInResponse= "Custom Data In Response"
    next() //! go to next function // skip this one
    // Buradaki next() çalıştığı an (req,res) anında bir sonraki method'a iletilir.
    res.send({ // next() ten dolayı çalışmaz
        message: 'Middleware running'
    })
})


app.get('/',(req,res)=> {
    res.send({
        customData: [
            req.customData,
            res.customDataInResponse
        ],
        message: "Welcome to home"
    })
})
/* ---------------------------------------------- */
const middleFunction1 = (req,res,next)=>{
    console.log(req.query); 
    const skip = req.query.skip ?? false
    req.customData = 'Custom Data With Request'
    res.customDataInResponse = 'Custom Data With Response'
    if(skip){
        // Bir sonraki bağımsız funct.'a gider
        next('route')    
    }else {
        // Bir sonraki func.'a git
        next()
    }


}
const middleFunction2 = (req,res,next)=>{
    // next()
   res.send({
    customData:[
        req.customData,
        res.customDataInResponse
    ],
    message: 'Here is func2, first next() runned'
   })


}
//? add to function like callBack:
// app.get('/',middleFunction1,middleFunction2,(req,res)=>{.....}
//? it can be in an array:
app.get('/',[middleFunction1,middleFunction2],(req,res)=>{
    res.send({
        customData:[
            req.customData,
            res.customDataInResponse
        ],
        message: 'Welcome to Home'
    })
})

// next('route') ile calisti
app.get('/',(req,res)=>{
    res.send({
        message:'next route'
    })
})







// next() //! next() for next callBackFunction:

/* ---------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
