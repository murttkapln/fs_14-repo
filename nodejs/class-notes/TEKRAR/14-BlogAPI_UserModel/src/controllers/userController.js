
"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */


// -------------------------------------------------------
//******  USER   ********
// -------------------------------------------------------


//? Catch async-errors and send to errorHandler:


const User = require('../models/userModel')


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
      // const data = await User.create({
      //     fieldName: 'value',
      //     fieldName: 'value',
      //     fieldName: 'value',
      // })
  
      const data = await User.create(req.body);
      res.status(201).send({
        error: false,
        body: req.body,
        result: data,
      });
    },
    read: async (req, res) => {
      //req.params.postId
      //    const data =await User.findById(req.params?.userId) // mongoose'a özel
      const data = await User.findOne({ _id: req.params.userId });
      res.status(200).send({
        error: false,
        result: data,
      });
    },
    update: async (req, res) => {
      // const data = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true }) // return new-data with mongoose
  
      const data = await User.updateOne({ _id: req.params.userId }, req.body);
      res.status(202).send({
        error: false,
        body: req.body,
        result: data,
        newData: await User.findOne({ _id: req.params.userId }),
      });
    },
    delete: async (req, res) => {
      const data = await User.deleteOne({ _id: req.params.userId });
  
      res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
    },
  };