"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
const personnel = require("../controllers/personnel.controller");

//? URL: /personnels
router.route("/").get(personnel.list).post(personnel.create);

//? Login / logout:
router.post("/login", personnel.login);
router.all("/logout", personnel.logout);

router
  .route("/:id")
  .get(personnel.read)
  .put(personnel.update)
  .patch(personnel.update)
  .delete(personnel.delete);

/* ------------------------------------------------------- */
module.exports = router;
