"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// https://mongoosejs.com/docs/queries.html

//? Catch async-errors and send to errorhandler:
require("express-async-errors");

//? Call Models:
const { BlogPost,BlogCategory } = require("../models/blogModel");


// -------------------------------------------------------
//******  BLOG CATEGORY    ********
// -------------------------------------------------------


module.exports.BlogCategory = {
  list: async (req, res) => {
    const data = await BlogCategory.find();
    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
    });
  },
  create: async (req, res) => {
    // const data = await BlogCategory.create({
    //     fieldName: 'value',
    //     fieldName: 'value',
    //     fieldName: 'value',
    // })

    const data = await BlogCategory.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },
  read: async (req, res) => {
    //req.params.postId
    //    const data =await BlogCategory.findById(req.params?.categoryId) // mongoose'a özel
    const data = await BlogCategory.findOne({ _id: req.params.categoryId });
    res.status(200).send({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    // const data = await BlogCategory.findByIdAndUpdate(req.params.categoryId, req.body, { new: true }) // return new-data with mongoose

    const data = await BlogCategory.updateOne({ _id: req.params.categoryId }, req.body);
    res.status(202).send({
      error: false,
      body: req.body,
      result: data,
      newData: await BlogCategory.findOne({ _id: req.params.categoryId }),
    });
  },
  delete: async (req, res) => {
    const data = await BlogCategory.deleteOne({ _id: req.params.categoryId });

    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};







// -------------------------------------------------------
//******  BLOGPOST    ********
// -------------------------------------------------------
module.exports.BlogPost = {
  list: async (req, res) => {
    const data = await BlogPost.find();
    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
    });
  },
  create: async (req, res) => {
    // const data = await BlogPost.create({
    //     fieldName: 'value',
    //     fieldName: 'value',
    //     fieldName: 'value',
    // })

    const data = await BlogPost.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },
  read: async (req, res) => {
    //req.params.postId
    //    const data =await BlogPost.findById(req.params?.postId) // mongoose'a özel
    const data = await BlogPost.findOne({ _id: req.params.postId });
    res.status(200).send({
      error: false,
      result: data,
    });
  },
  update: async (req, res) => {
    // const data = await BlogPost.findByIdAndUpdate(req.params.postId, req.body, { new: true }) // return new-data with mongoose

    const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body);
    res.status(202).send({
      error: false,
      body: req.body,
      result: data,
      newData: await BlogPost.findOne({ _id: req.params.postId }),
    });
  },
  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });

    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};
