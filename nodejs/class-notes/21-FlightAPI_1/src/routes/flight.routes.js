"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/flight:
const permissions = require("../middlewares/permissions");
const flight = require("../controllers/flight.controller");

// URL: /flights


// router
//   .route("/")
//   .get(permissions.isStaff, flight.list)
//   .post(permissions.isStaff, flight.create);

// router
//   .route("/:id")
//   .get(permissions.isStaff, flight.read)
//   .put(permissions.isStaff, flight.update)
//   .patch(permissions.isStaff, flight.update)
//   .delete(permissions.isAdmin, flight.delete);

router.use(permissions.isStaffOrAdmin)

router
  .route("/")
  .get(flight.list)
  .post(flight.create);

router
  .route("/:id")
  .get(flight.read)
  .put(flight.update)
  .patch(flight.update)
  .delete(permissions.isAdmin, flight.delete);

/* ------------------------------------------------------- */
module.exports = router;
