"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

//users:
router.use('/users', require('./user'))

// Categories:
router.use('/categories', require('./category'))

// tokens:
router.use('/tokens', require('./token'))



/* ------------------------------------------------------- */
module.exports = router