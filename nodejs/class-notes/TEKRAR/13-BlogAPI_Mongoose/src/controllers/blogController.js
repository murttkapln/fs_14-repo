"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// https:/mongoosejs.com/docs/queries.html
// Catch async-errors and send to errorHandler:

require('express-async-errors')

// Call Models:
const {BlogPost} = require('../models/blogModel')

//  ------------------------------------------------------- 
                        // BlogPost
//  ------------------------------------------------------- 

module.exports.BlogPost = {
    list:async (req,res)=>{
        const data = await BlogPost.find()
        res.send({
            res.status(200).send({
                error: false,
                result: data

            })
        })
    },
    create:async (req,res)=>{
        const data = await BlogPost.insertOne(req.body)
        res.send({
            res.status(201).send({
                error: false,
                body: req.body,
                result: data,
            })

        })
    },
    read:async (req,res)=>{
        res.send({

        })
    },
    update:async (req,res)=>{
        res.send({

        })
    },
    delete:async (req,res)=>{
        res.send({

        })
    },

}