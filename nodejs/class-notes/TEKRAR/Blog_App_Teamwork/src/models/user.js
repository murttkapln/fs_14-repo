"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- *

{
    "username": "admin",
    "password": "aA*123456",
    "email": "admin@site.com",
    "first_name": "admin",
    "last_name": "admin",
    "image":"",
    "bio":"",
    "isAdmin": true
}

{
    "username": "test",
    "password": "aA*123456",
    "email": "test@site.com",
    "first_name": "test",
    "last_name": "test",
    "image":"",
    "bio":"",
    "iAdmin": false
}
/* ------------------------------------------------------- */
// User Model:
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const { default: isEmail } = require("validator/lib/isEmail");

const UserSchema = new mongoose.Schema({
  username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true
  },
  email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
      validate: [isEmail, "Email type is not correct"]
  },
  password: {
      type: String,
      trim: true,
      required: true
  },
  first_name: {
      type: String,
      trim: true,
      required: true
  },
  last_name: {
      type: String,
      trim: true,
      required: true
  },
  image: {
      type: String,
      trim: true,
      required: false
  },
  bio: {
      type: String,
      trim: true,
      required: false
  },
  isAdmin: {
      type: Boolean,
      default: false
  },
},{ collection: 'users', timestamps: true })
/* ------------------------------------------------------- */
// Schema Configs:
UserSchema.pre('save', function(next){
  if(this.password){
      const isPasswordValidated = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+.,])[A-Za-z\d@$!%*?&+.,].{8,}$/.test(data.password)
      if(isPasswordValidated){
          this.password = passwordEncrypt(this.password)
      }else{
          next(new Error("Password not validated."))
      }
      next()
  }
})
// FOR FRONTEND DEVELOPER: //
UserSchema.pre('init', function (data) {
  data.id = data._id
})
/* ------------------------------------------------------- */
module.exports = mongoose.model('User', UserSchema)