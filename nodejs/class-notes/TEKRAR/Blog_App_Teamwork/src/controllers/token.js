"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */
// Token Controller:

const Token = require("../models/token");

module.exports = {
  
  list: async (req, res) => {
    const data = await res.getModelList(Token);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Token),
      data,
    });
  },
  
  create: async (req, res) => {
    const data = await Token.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },
  
  read: async (req, res) => {
    const data = await Token.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  
  update: async (req, res) => {
    const data = await Token.updateOne({ _id: req.prams.id }, req.body);

    res.status(202).send({
      error: false,
      data,
      new: await Token.findOne({ _id: req.params.id }),
    });
  },
  
  delete: async (req, res) => {
    const data = await TOken.delete({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};
