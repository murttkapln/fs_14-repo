"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | RENT_A_CAR_API
------------------------------------------------------- */
// User Model:

/* ------------------------------------------------------- *
{
  "username": "test",
  "password": "1234",
  "email": "test@site.com",
  "firstName": "ghost",
  "lastName": "rider",
  "isActive": true,
  "isAdmin": false
}
{
  "username": "admin",
  "password": "1234",
  "email": "test2@site.com",
  "firstName": "ghost",
  "lastName": "rider",
  "isActive": true,
  "isAdmin": true
}
/* ------------------------------------------------------- */

const passwordEncrypt = require("../helpers/passwordEncrypt");
const { mongoose } = require("../configs/dbConnection");
const UserSchema = new mongoose.Schema(
  {
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
      set: (password) => passwordEncrypt(password),
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email field must be required "],
      unique: [true, "There is this email. Email field must be unique"],
      validate: [
        (email) => {
          const emailRegexCheck =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegexCheck.test(email);
        },
        "Email type is not correct",
      ],
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

/* ------------------------------------------------------- */

module.exports = mongoose.model('User', UserSchema)