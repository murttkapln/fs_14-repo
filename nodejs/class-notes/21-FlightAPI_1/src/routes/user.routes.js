"use strict";
/* -------------------------------------------------------
   * EXPRESS - FLIGHT API
------------------------------------------------------- */

const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/user:

const {isAdmin} = require("../middlewares/permissions");
const user = require("../controllers/user.controller");

// URL: /users


router.use(isAdmin)

router
.route("/")
.get(user.list)
.post(user.create);

router
  .route("/:id")
  .get(user.read)
  .put(user.update)
  .patch(user.update)
  .delete(user.delete); // user silme işi adminde

/* ------------------------------------------------------- */
module.exports = router;
