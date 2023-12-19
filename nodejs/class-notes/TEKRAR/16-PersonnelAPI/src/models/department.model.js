"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        uniqe: true
    }
},{ collection: "departments",timestamps:true }) 

module.exports = mongoose('Department', DepartmentSchema)