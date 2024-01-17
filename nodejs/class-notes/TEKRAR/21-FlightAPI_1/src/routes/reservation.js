"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/reservation:

const {isStaffOrAdmin, isAdmin} = require('../middlewares/permissions')
const reservation = require("../controllers/reservation");

// URL: /reservations

router.use(isStaffOrAdmin)

router.route("/")
.get(reservation.list)
.post(reservation.create);

router
  .route("/:id")
  .get(reservation.read)
  .put(reservation.update)
  .patch(reservation.update)
  .delete(isAdmin,reservation.delete);

/* ------------------------------------------------------- */
module.exports = router;
