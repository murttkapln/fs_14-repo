"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// Topping Model:

const passwordEncrypt = require('../helpers/passwordEncrypt')

const ToopingSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

}, {
    collection: 'toppings',
    timestamps: true
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('Topping', ToppingSchema)