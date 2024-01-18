"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
require("dotenv").config();
const HOST = process.env?.HOST || "127.0.0.1";
const PORT = process.env?.PORT || 8000;
/* ------------------------------------------------------- */
const swaggerAutogen = require("swagger-autogen")();
const packageJson = require("./package.json");

const document = {
  info: {
    version: packageJson.version,
    title: packageJson.title,
    description: packageJson.description,
    ternsOfService: "http:/www.clarusway.com",
    contact: { name: packageJson.author, email: "murttkapln@gmail.com" },
    license: { name: packageJson.license },
  },
  host: `${HOST}: ${PORT}`,
  homePath: "/",
  schemes: ["http", "https"],
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description:
        "Enter Your AccessToken (JWT) for login. Example:<b>Bearer <i>...token...<i></b>",
    },
  },
  security: [{ JWT: true }],
  definition: {
    "/auth/login": {
      username: {
        type: "String",
        required: true,
      },
      password: {
        type: "String",
        required: true,
      },
    },
  },
  "/auth/refresh": {
    "token.refresh": {
      description: "{token: {refresh: ...}}",
      type: "String",
      required: true,
    },
  },

  // Models:
  User: require("./src/models/user").schema.obj,
  Flight: require("./src/models/flight").schema.obj,
  Passenger: require("./src/models/passenger").schema.obj,
  Reservation: require("./src/models/reservation").schema.obj,
};

const routes = ["./index.js"];
const outputFile = "./src/configs/swagger.json";

// Create JSON File:
swaggerAutogen(outputFile, document);
