const express = require('express'); // import express module
const router = express.Router(); // create a new router instance
const {getHomePage,getTestPage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser} = require('../controllers/homeController'); // import homeController

// Define routes
router.get('/', getHomePage)
router.get('/test', getTestPage);

router.post('/create-user', postCreateUser); // add route for creating user

router.post('/update-user', postUpdateUser) 

router.get('/create', getCreatePage); // add route for create page

router.get('/edit/:id', getUpdatePage); // add route for edit page

router.post('/delete-user/:id', postDeleteUser); // add route for deleting user

router.post('/delete-user', postHandleRemoveUser); // add route for deleting user with confirmation
module.exports = router; // export the router to use in server.js