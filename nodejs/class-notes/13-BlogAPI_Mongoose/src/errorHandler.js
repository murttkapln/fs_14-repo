"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Catch Errors:


module.exports = (err,req,res,next)=> {

    const statusCode = res.errorStatusCode ?? 500

    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
        body: req.body, // sending  json data
        
    })

}




