"use strict";
/* -------------------------------------------------------
   * EXPRESS - FLIGHT API
------------------------------------------------------- */

const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/

// URL: /

// auth:
router.use("/auth", require("./auth.routes"));
// user:
router.use("/users", require("./user.routes"));

// flight:
router.use("/flights", require("./flight.routes"));
// passenger:
router.use("/passengers", require("./passenger.routes"));
// reservation:
router.use("/reservations", require("./passenger.routes"));

// document:
// app.use('/documents', require('./src/routes/document.routes'))

/* ------------------------------------------------------- */
module.exports = router;
