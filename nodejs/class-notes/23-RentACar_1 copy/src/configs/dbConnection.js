"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | RENT_A_CAR_API
------------------------------------------------------- */
// MongoDB Connection:

const mongoose = require("mongoose");

const dbConnection = function () {
  // Connect:
  mongoose
    .connect(process.env.MONGODB)
    .then(() => console.log(" * DB Connected *"))
    .catch((err) => console.log(" * DB Not Connected *"));
};

/* ------------------------------------------------------- */
module.exports = {
  mongoose,
  dbConnection,
};
