"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000
/* ------------------------------------------------------- */
//* $ npm i swagger-autogen
const swaggerAutogen = require('swagger-autogen')()
const packageJson = require('./package.json')

const document = {
	info: {
		version: packageJson.version,
		title: packageJson.title,
		description: packageJson.description,
		termsOfService: "http://www.clarusway.com",
		contact: { name: packageJson.author, email: "qadir@clarusway.com" },
		license: { name: packageJson.license, },
	},
	host: `${HOST}:${PORT}`,
	basePath: '/',
	schemes: ['http', 'https'],
	// JWT Settings:
	securityDefinitions: {
		JWT: {
			type: 'apiKey',
			in: 'header',
			name: 'Authorization',
			description: 'Enter Your AccessToken (JWT) for Login. Example: <b>Bearer <i>...token...<i></b>'
		}
	},
	security: [{ "JWT": true }],
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
		// Models:
		"User": require('./src/routes/user.routes').schema.obj,
		"Flight": require('./src/routes/flight.routes').schema.obj,
		"Passenger": require('./src/routes/passenger.routes').schema.obj,
		"Reservation": require('./src/routes/reservation.routes').schema.obj,
	}
};

const routes = ['./index.js']
const outputFile = './src/configs/swagger.json'

// Create JSON file:
swaggerAutogen(outputFile, routes, document)