"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | RENT_A_CAR_API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// Routes:

// URL: /


// user:
router.use('/users',require('./user'))



/* ------------------------------------------------------- */
module.exports = router


