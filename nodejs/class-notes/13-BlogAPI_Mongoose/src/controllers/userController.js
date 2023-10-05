"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
require("express-async-errors");

const passwordEncrypt = require("../helpers/passwordEncrypt");
const User = require("../models/userModel");

// ------------------------------------------
// User
// ------------------------------------------

module.exports.User = {
  list: async (req, res) => {
    const data = await User.find();

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
    });
  },

  create: async (req, res) => {
    const data = await User.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },

  read: async (req, res) => {
    // req.params.userId
    // const data = await User.findById(req.params.userId)
    const data = await User.findOne({ _id: req.params.userId });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    // const data = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true }) // return new-data
    const data = await User.updateOne({ _id: req.params.userId }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      body: req.body,
      result: data, // update infos
      newData: await User.findOne({ _id: req.params.userId }),
    });
  },

  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });

    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      // const user = await User.findOne({email: email, password:passwordEncrypt(password)})
      const user = await User.findOne({ email: email, password: password });
      if (user) {
        res.status(200).send({
          error: false,
          result: user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("Login parameters are not true");
      }
    } else {
      res.errorStatusCode = 400;
      throw new Error("Email and Password are required");
    }
  },
};
