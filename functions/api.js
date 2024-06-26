// LIBRARY IMPORT
const express           = require("express")
const serverless        = require("serverless-http")
const { PrismaClient}   = require("@prisma/client")
const bodyParser        = require("body-parser")
const cors              = require("cors")
const compression       = require("compression")
const cookieParser      = require("cookie-parser")

// APP CONFIGURATION
const app               = express()

app.use(cors({ origin:true, credentials:true }));

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cookieParser())

app.use(compression())


// ROUTES
const api_routes        = require("../app/routes/api.routes")
const user_routes       = require("../app/routes/user.routes")
const data_routes       = require("../app/routes/data.routes")
const keyword_routes    = require("../app/routes/keyword.routes")

// ROUTES ARRAY
const endpoints = [ api_routes, user_routes, data_routes, keyword_routes ]

app.use('/.netlify/functions/api', endpoints)

module.exports.handler = serverless(app)