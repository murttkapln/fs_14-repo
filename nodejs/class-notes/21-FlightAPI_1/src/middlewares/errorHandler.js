"use strict";
/* -------------------------------------------------------
   * EXPRESS - FLIGHT API
------------------------------------------------------- */

module.exports = (err, req, res, next) => {
  return res.status(res?.errorStatusCode || 500).send({
    error: true,
    message: err.message,
    cause: req.cause,
    body: req.body,
  });
};
