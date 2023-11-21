"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */
const Like = require("../models/like");

module.exports = {
  create: async (req, res) => {
    
    req.body.user_id = req.user._id;

    req.body.post_id = req.params._id;

    console.log(req.body);

    // const data = await Like.create(req.body)

    res.status(201).send({
      error: false,
      // data
    });
  },
};
