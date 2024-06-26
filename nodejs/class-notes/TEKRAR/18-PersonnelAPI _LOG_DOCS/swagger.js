"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
require("dotenv").config();
const HOST = process.env?.HOST || "127.0.0.1";
const PORT = process.env?.PORT || 8000;
/*------------------------------------------------------- */

// npm i swagger-autogen
// https://swagger-autogen.github.io/docs

/* ------------------------------------------------------- *
const options = {
	openapi:          <string>,     // Enable/Disable OpenAPI.                        By default is null
	language:         <string>,     // Change response language.                      By default is 'en-US'
	disableLogs:      <boolean>,    // Enable/Disable logs.                           By default is false
	autoHeaders:      <boolean>,    // Enable/Disable automatic headers recognition.  By default is true
	autoQuery:        <boolean>,    // Enable/Disable automatic query recognition.    By default is true
	autoBody:         <boolean>,    // Enable/Disable automatic body recognition.     By default is true
	writeOutputFile:  <boolean>     // Enable/Disable writing the output file.        By default is true
};
/* ------------------------------------------------------- */

// const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' })

const swaggerAutogen = require("swagger-autogen")();
const packageJson = require("./package.json");

const document = {
  // info: {
  //     version: "1.0.0",
  //     title: "Personnel API",
  //     description: "Personnel Management API Service",
  //     termsOfService: "http://clarusway.com",
  //     contact: {name: "Murat_Kaplan", email: "murttkapln@gmail.com"}
  // },
  info: {
    version: packageJson.version,
    title: packageJson.title,
    description: packageJson.description,
    termsOfService: "http://www.Clarusway.com",
    contact: { name: packageJson.author, email: "murttkapln@gmail.com" },
    license: { name: packageJson.license },
  },
  host: `{HOST}: ${PORT}`,
  basePath: "/",
  schemes: ["http", "https"],

  // JWT Settings:
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description:
        "Entry Your AccessToken (JWT) for Login. Example <b>Bearer <i>...token <i><b>",
    },
  },
  security: [{ JWT: true }],
  definition: {
    "/auth/login": {
      username: {
        type: "String",
        required: true
      },
      password: {
        type: "String",
        required: true
      },
    },
    "/auth/refresh": {
      "token.refresh": {
        description: "{ token: { refresh: ... } }",
        type: "String",
        required: true
      }
    },
    // "Department": {
    //   "name": {
    //     type: "ObjectId",
    //     required: true
    //   }
    // },
    "Department": require('./src/models/department.model').schema.obj,
    "Personnel": require('./src/models/personnel.model').schema.obj
 

  }
};

const routes = ['./index.js']
const outputFile = './swagger.json'

// Create JSON File:
swaggerAutogen(outputFile, routes, document)
