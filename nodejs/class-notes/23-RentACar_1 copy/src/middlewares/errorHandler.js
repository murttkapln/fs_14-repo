"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | RENT_A_CAR_API
------------------------------------------------------- */
// app.use(errorHandler):

module.exports = (err, req, res, next) => {
  return res.status(res?.errorrStatusCode || 500).send({
    error: true,
    message: err.message,
    cause: err.cause,
    body: req.body,
    stack: err.stack,
  });
};
