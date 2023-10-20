"use strict";
/* -------------------------------------------------------
   * EXPRESS - FLIGHT API
------------------------------------------------------- */

//* $ npm init -y
//* $ npm i express
const express = require("express");
const app = express();

/* ------------------------------------------------------- */
//* npm i dotenv
// Required Modules:
require("dotenv").config();
const PORT = process.env.PORT || 8000;

//* $ npm i express-async-errors
// asyncErrors to errorHandler:
require("express-async-errors");

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* ------------------------------------------------------- */
// Middlewares:
// Accept JSON
app.use(express.json());

// Check Authhentication:
app.use( require("./src/middlewares/authentication"));

// res.getModelList():
app.use(require("./src/middlewares/findSearchSortPage"));
/* ------------------------------------------------------- */

// Routes:

// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to FLIGHT RESERVATION API",
    documents: '/documents',
    user: req.user
  });
});

app.use("/", require("./src/routes/index.routes"));

// // auth:
// app.use("/auth", require("./src/routes/auth.routes"));
// // user:
// app.use("/users", require("./src/routes/user.routes"));

// // flight:
// app.use("/flights", require("./src/routes/flight.routes"));
// // passenger:
// app.use("/passengers", require("./src/routes/passenger.routes"));
// // reservation:
// app.use("/reservations", require("./src/routes/passenger.routes"));

// // document:
// // app.use('/documents', require('./src/routes/document.routes'))

/* ------------------------------------------------------- */
// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running on http://127.0.0.1:" + PORT));
/* ------------------------------------------------------- */
// Syncronization (must be in commentline):
// require('./src/helpers/sync')
