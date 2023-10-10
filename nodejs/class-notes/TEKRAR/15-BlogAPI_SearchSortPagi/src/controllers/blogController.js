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
    // const data = await BlogCategory.find();

    const data = await req.getModelList(BlogCategory)

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
  
  

 /*/  
   //******  Seacrhing & Sorting & Pagination: ******/
// //?  SEARCHING: URL?search[key1]=value1&search[key2]=value2
//     const search = req.query?.search || {}
     // console.log(search);
    
     // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
//     for(let key in search) search[key]= {$regex: search[key], $options: 'i'} // i: key insensitive

//     //? SORTING: URL?sort[key1]=1&sort[key2]=-1 (1:ASC, -1: DESC)
//     const sort = req.query?.sort || {}
     // console.log(sort);

//     //? PAGINATION: URL?page=1&limit=10
    // const limit = req.query?.limit || 20
    /*//!  Alternatif */
     // let limit = req.query?.limit || (process.env.PAGE_SIZE || 20)
     // limit = NUmber(limit)
//     let limit = Number(req.query?.limit || (process.env?.PAGE_SIZE || 20))
//     limit = limit > 0 ?limit: Number(process.env.PAGE_SIZE || 20)
     // console.log('Limit',typeof limit, limit);

//     let page = Number(req.query?.page || 1) 
//     page = (page > 0 ? page: 1) -1 // BackEnd'de sayfa no her zaman -1'dir.
    // console.log('page', typeof page, page);

//     let skip = Number(req.query?.skip ||(page * limit))// İstenirse URL'de ?skip=10 gibi değer gönderilebilir.
//     skip = skip > 0 ? skip:(page * limit)
     // console.log('skip', typeof skip, skip);
    


// //? RUN:
     // const data = await BlogPost.find().populate('blogCategoryId'); // Get Primary Data
//     const data = await BlogPost.find(search).sort(sort).skip(skip).limit(limit).populate('blogCategoryId')


const data = await req.getModelList(BlogPost, 'blogCategoryId')

    res.status(200).send({
      error: false,
      count: data.length,
      details: await req.getModelListDetails(BlogPost),
      result: data,
    });
  },
  listCategoryPosts: async (req, res) => {
    const data = await BlogPost.find({blogCategoryId: req.params.categoryId}).populate('blogCategoryId'); // Get Primary Data
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
    const data = await BlogPost.findOne({ _id: req.params.postId }).populate('blogCategoryId'); // Get Primary Data
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
