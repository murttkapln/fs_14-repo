"use strict";
/* -------------------------------------------------------
   * EXPRESS - FLIGHT API
------------------------------------------------------- */

//* $ npm i mongoose

const mongoose = require("mongoose");

// connect:
const dbConnection = function () {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log("* DB CONNECTED *"))
    .catch((err) => console.log("* DB NOT CONNECTED *", err));
};

module.exports = { mongoose, dbConnection };
