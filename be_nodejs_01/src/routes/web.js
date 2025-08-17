const express = require('express'); // import express module
const router = express.Router(); // create a new router instance
const {getHomePage,getTestPage} = require('../controllers/homeController'); // import homeController

// Define routes
router.get('/', getHomePage)
router.get('/test', getTestPage);



module.exports = router; // export the router to use in server.js