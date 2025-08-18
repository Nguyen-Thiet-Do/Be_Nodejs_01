const express = require('express'); // import express module
const router = express.Router(); // create a new router instance
const {getHomePage,getTestPage, postCreateUser, getCreatePage} = require('../controllers/homeController'); // import homeController

// Define routes
router.get('/', getHomePage)
router.get('/test', getTestPage);

router.post('/create-user', postCreateUser); // add route for creating user

router.get('/create', getCreatePage); // add route for create page


module.exports = router; // export the router to use in server.js