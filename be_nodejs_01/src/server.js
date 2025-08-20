const express = require('express') // import express module
const app = express()
require('dotenv').config() // import dotenv module to use environment variables
const port = process.env.PORT || 8081 // khai báo port cho server
const hostName = process.env.HOST_NAME // khai báo tên máy chủ
const mongoose = require('mongoose') // import mongoose module for MongoDB connection


const webRoutes = require('./routes/web') // import web routes
const configViewEngine = require('./config/ViewEngine') // import configViewEngine function
configViewEngine(app) // call configViewEngine function to set up view engine and static files

const connection = require('./config/database') // import database connection

//con flig res.body 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use('/', webRoutes); // use web routes for the root path

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'Zildjian' });
cat.save().then(() => console.log('meow'));


(async () => {
  try {
    await connection(); // Ensure the database connection is established
    app.listen(port, hostName, () => {
      console.log(`Server is running at http://${hostName}:${port}`);
    })

  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
})()

