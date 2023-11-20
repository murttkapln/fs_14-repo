"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */
// Catch Errors:

module.exports = (err, req, res, next) => {

    const errorStatusCode = res?.errorStatusCode || 500

    return  res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
        body: req.body
    })
}