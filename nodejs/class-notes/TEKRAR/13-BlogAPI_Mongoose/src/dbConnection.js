"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGODB || "mogodb://127.0.0.1:27017/")
  .then(() => console.log(" * DB CONNECTED *"))
  .catch((err) => console.log(" * DB NOT CONNECTED *", err));
