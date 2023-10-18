"use strict";
/* -------------------------------------------------------
   * EXPRESS - FLIGHT API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/auth:

const auth = require("../controllers/auth.controller");

// URL: /auth

router.post("/login", auth.login);
router.post("/refresh", auth.refresh);
router.get("/logout", auth.logout);
/* ------------------------------------------------------- */
module.exports = router;
