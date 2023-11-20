"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */


const express = require("express");
const app = express()


/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();

const PORT = process.env.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Connect To MOngoDB with mongoose:
require('./src/config/dbConnection')

// HomePage
app.call("/", (req, res) => {
  res.send("Welcome To Blog Api");
});

// Routes:
require('./src/routes')

// ErrorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("Running On 127.0.0.1:") + PORT);

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
