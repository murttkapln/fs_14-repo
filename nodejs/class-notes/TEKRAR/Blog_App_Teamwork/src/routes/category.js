"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// routes/category:

const category = require("../models/category");

// URL

router.route("/").get(category.list).post(category.create);

router
  .route("/:id")
  .get(category.read)
  .put(category.update)
  .patch(category.update)
  .delete(category.delete);

  /* ------------------------------------------------------- */

  module.exports = router