"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// npm i express-async-errors
require('express-async-errors')

const Todo = require('../models/todo')

const priority = {
    "1": "High",
    "0": "Normal",
    "-1": "Low"

}

module.exports = {

    list: async (req, res) => {

        // const data = await Todo.findAll()
        const data = await Todo.findAndCountAll()
        
        // res.status(200).send({
        //     error: false,
        //     result: data
        // })

        // from /public/ folder: 
        // res.render('todoList')

        // Send data to template:
        console.log(data);
        res.render('todoList', {data, priority})
    },

    // CRUD METHODS:

    create: async (req, res) => {

        console.log(req.method);

        if(req.method == 'POST'){

            // console.log(req.body);
            // Save:
            const data = await Todo.create(req.body)

            // Redirect to home:
        res.redirect('/view')

        }else {
            // Template:
            res.render('todoCreate')
        }

        // const data = await Todo.create(req.body)
        // res.status(201).send({
        //     error: false,
        //     body: req.body, // Send Data
        //     message: 'Created',
        //     result: data // Receive Data
        // })
    },

    read: async (req, res) => {

        const data = await Todo.findByPk(req.params.id)
        // res.status(200).send({
        //     error: false,
        //     result: data
        // })

         // Send data to template:
         console.log(data);
        res.render('todoRead', {todo:data, priority})
    
    },

    update: async (req, res) => {

        if(req.method == 'POST'){

            // console.log(req.body);
            // Update:
            const isUpdated = await Todo.update(req.body, { where: { id: req.params.id } })

            // Redirect to home:
        res.redirect('/view')

        }else { // GET
            const data = await Todo.findByPk(req.params.id)

            // Template:
            res.render('todoUpdate', {todo:data})
        }

        // const isUpdated = await Todo.update(req.body, { where: { id: req.params.id } })
        // res.status(202).send({
        //     error: false,
        //     body: req.body, // Send Data
        //     message: 'Updated',
        //     isUpdated: Boolean(isUpdated[0]),
        //     result: await Todo.findByPk(req.params.id)
        // })
    },

    delete: async (req, res) => {

        // Model.destroy({ filter })
        const isDeleted = await Todo.destroy({ where: { id: req.params.id } })
        // isDeleted return: 1 or 0
        // if (isDeleted) {
        //     res.sendStatus(204)
        // } else {
        //     res.sendStatus(404)
        // }

        // Redirect to home:
        res.redirect('/view')
       
    }
}