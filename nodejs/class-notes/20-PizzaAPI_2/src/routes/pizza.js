"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/pizza:

const pizza = require("../controllers/pizza");
const permissions = require("../middlewares/permissions");

// URL: /pizzas

router.route("/")
.get(pizza.list)
.post(permissions.isAdmin, pizza.create);

router
  .route("/:id")
  .get(pizza.read)
  .put(permissions.isAdmin, pizza.update)
  .patch(permissions.isAdmin, pizza.update)
  .delete(permissions.isAdmin, pizza.delete);

/* ------------------------------------------------------- */
module.exports = router;
