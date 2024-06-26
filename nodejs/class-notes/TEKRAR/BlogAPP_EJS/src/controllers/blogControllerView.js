"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// https://mongoosejs.com/docs/queries.html

// Catch async-errors and send to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */

// Call Models:
const { BlogCategory, BlogPost } = require('../models/blogModel')


// ------------------------------------------
// BlogPost
// ------------------------------------------
module.exports.BlogPost = {

    list: async (req, res) => {

        const data = await res.getModelList(BlogPost, 'blogCategoryId')

        // Output: JSON
        // res.status(200).send({
        //     error: false,
        //     count: data.length,
        //     details: await res.getModelListDetails(BlogPost),
        //     result: data,
        // })

        const categories = await BlogCategory.find()
        const recentPosts = await BlogPost.find().sort({ createdAt: 'desc' }).limit(3)

        // Add '?' parameters to url if there is not:
        if (!req.url.includes('?')) req.url += '?'

        // Output: HTML
        // res.render('index', {
        res.render('postList', {
            user: req.session?.user,
            details: await res.getModelListDetails(BlogPost),
            posts: data,
            categories,
            recentPosts,
            // pageUrl: req.url,
            // convert "?key=value&page=2" to "?key=value"
            pageUrl: req.url.replace(/[?|&]page=([^&]+)/gi, '') // clean 'page' queries from url.
        })
    },

    // CRUD ->

    create: async (req, res) => {

        if (req.method == 'POST') {

            // Add userId from session:
            req.body.userId = req.session.user.id
        
            const data = await BlogPost.create(req.body)
    
            // res.status(201).send({
            //     error: false,
            //     body: req.body,
            //     result: data,
            // })

            res.redirect('/post/' + data.id)

        } else {

            res.render('postForm', {
                user: req.session?.user,
                categories: await BlogCategory.find(),
                post: null,
            })
        }
    },

    read: async (req, res) => {
        
        const data = await BlogPost.findOne({ _id: req.params.postId }).populate('blogCategoryId') // get Primary Data

        // res.status(200).send({
        //     error: false,
        //     result: data
        // })

        res.render('postRead', {
            user: req.session?.user,
            post: data,
        })

    },

    update: async (req, res) => {

        if (req.method == 'POST') {
        
            const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body, { runValidators: true })
    
            // res.status(202).send({
            //     error: false,
            //     body: req.body,
            //     result: data, // update infos
            //     newData: await BlogPost.findOne({ _id: req.params.postId })
            // })

            res.redirect('/post/' + req.params.postId)

        } else {

            res.render('postForm', {
                user: req.session?.user,
                categories: await BlogCategory.find(),
                post: await BlogPost.findOne({ _id: req.params.postId }).populate('blogCategoryId'),
            })

        }
    },

    delete: async (req, res) => {
        
        const data = await BlogPost.deleteOne({ _id: req.params.postId })

        // res.sendStatus( (data.deletedCount >= 1) ? 204 : 404 )

        res.redirect('/')

    },
}