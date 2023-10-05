"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");
const passwordEncrypt = require('../helpers/passwordEncrypt')



const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email  field must be required"],
      validate: [
        (email) => email.includes("@") && email.includes("."), // ValidationCheck
        "Email is not true format",
      ], // ErrorMessage
    },
    password: {
      type: String,
      trim: true,
      required: true,
      set: (password)=> passwordEncrypt(password)
    },
    firsName: String,
    lastName: String,
  },
  { collection: "users", timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
