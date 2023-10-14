"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */

// await User Controller:

module.exports = {
    list: async (req,res)=>{
        const data = await User.find()
        res.status(200).send({
            error:false,
            data
        })
    },
    create: async (req,res)=>{
        const data = await User.create()
        res.status(201).send({
            error:false,
            data
        })
    },
    read: async (req,res)=>{
        const data = await User.findOne()
        res.status(200).send({
            error:false,
            data
        })
    },
    update: async (req,res)=>{
        const data = await User.updateOne()
        res.status(202).send({
            error:false,
            data
        })
    },
    delete: async (req,res)=>{
        const data = await User.deleteOne()
        res.status(data.deletedCount ? 204 : 404).send({
            error:!data.deletedCount,
            data
        })
    },
}