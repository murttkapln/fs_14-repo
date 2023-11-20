"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */


const express = require("express");
const { dbConnection } = require("./src/configs/dbConnection");
const app = express()


/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || '127.0.0.1';

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Middlewares:

// Accept JSON:
app.use(express.json());

// Connect To MOngoDB with mongoose:
require('./src/configs/dbConnection')

// HomePage
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: 'Welcome to BlogApi'
  });
});

// Routes:
require('./src/routes')

// ErrorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
