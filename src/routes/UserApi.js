const express = require('express'); 
const { getAllUserAPI, postCreateUserAPI, putUpdateUserAPI, delUserAPI, postUploadSingleFile } = require('../controllers/apiController');
const routerAPI = express.Router();


routerAPI.get('/users', getAllUserAPI); 

routerAPI.post('/users', postCreateUserAPI);

routerAPI.put('/users', putUpdateUserAPI);

routerAPI.delete('/users', delUserAPI);



module.exports = routerAPI; 