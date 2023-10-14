"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/order:

const auth = require('../controllers/auth')

// URL: /auth

router.route('/login, auth.login')
router.post('/refresh, auth.refresh')
router.route('/logout, auth.logout')


/* ------------------------------------------------------- */
module.exports = router