"use strict";
/* -------------------------------------------------------
   * EXPRESS - FLIGHT API
------------------------------------------------------- */

const {mongoose} = require('../configs/dbConnection')

/* ------------------------------------------------------- *
{
    "username": "test",
    "password": "1234",
    "email": "test@site.com",
    "isActive": true,
    "isStaff": false,
    "isAdmin": false,
}
/* ------------------------------------------------------- */

// UserModel:

const passwordEncrypt = require('../helpers/passwordEncrypt')

//* $ npm i validator
const validator = require('validator')
const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => passwordEncrypt(password)
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Email field must be required'],
        unique: [true, 'There is this email. Email field must be unique'],
        validate: [validator.isEmail, 'Valid email is required']
        // validate: [
        //     (email) => email.includes('@') && email.includes('.'),
        //     'Email type is not correct.'
        // ]
    },

    isActive: {
        type: Boolean,
        default: true,
    },

    isStaff: {
        type: Boolean,
        default: false,
    },

    isAdmin: {
        type: Boolean,
        default: false,
    },

}, { collection: 'users', timestamps: true })

/* ------------------------------------------------------- */
module.exports = mongoose.model('User', UserSchema)