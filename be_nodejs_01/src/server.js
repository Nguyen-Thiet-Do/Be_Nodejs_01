const express = require('express') // import express module
const app = express()
require('dotenv').config() // import dotenv module to use environment variables
const port = process.env.PORT || 8081 // khai báo port cho server
const hostName = process.env.HOST_NAME // khai báo tên máy chủ
const webRoutes = require('./routes/web') // import web routes
const configViewEngine = require('./config/ViewEngine') // import configViewEngine function
configViewEngine(app) // call configViewEngine function to set up view engine and static files

const connection = require('./config/database') // import database connection

app.use('/', webRoutes) // use web routes for the root path



connection.query(
  'SELECT * from Users', function (error, results, fields) {

    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
