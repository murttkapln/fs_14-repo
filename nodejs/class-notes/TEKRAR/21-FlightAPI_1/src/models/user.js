"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
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
// User Model:
const passwordEncrypt = require("../helpers/passwordEncrypt");

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      uniqe: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      // select: false, //? Veriler çağrıldığında password verisinin gelmesini istemiyorsak kulanabiliriz.
      set: (password) => passwordEncrypt(password), // Gelen veriyi şifreler (veritabanına kaydedilmeden önce)
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Email field must be required."],
      uniqe: [true, "There is this email. Email field must be unique."],
      validate: [
        (email) => {
          const emailRegexCheck =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegexCheck.test(email);
        },
        "Email type is not correct.",
      ],
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isStaff: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
  },
  {collection: 'users', timestamps: true}
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("User", UserSchema);
