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
const HOST = process.env.HOST || '127.0.0.1';

// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
//*                    CONFIGURATIONS:

// DB Connection:
require('./src/configs/dbConnection')


/* ------------------------------------------------------- */
//* --------------- Middlewares: -------------

// Accept JSON:
app.use(express.json());

// Authentication
app.use(require('./src/middlewares/authentication'))

// res.getModelList():
app.use(require('./src/middlewares/findSearchSortPage'))

/* ------------------------------------------------------- */
// HomePage

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: 'Welcome to BlogApi'
  });
});

/* ------------------------------------------------------- */
// Routes:
app.use(require('./src/routes'))
/* ------------------------------------------------------- */
// ErrorHandler:
app.use(require("./src/middlewares/errorHandler"));
/* ------------------------------------------------------- */
// RUN SERVER:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.
