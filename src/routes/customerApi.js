const express = require('express'); 
const {  postUploadSingleFile , postCreateCustomer, getAllCustomersAPI} = require('../controllers/customerController');
const fileUpload = require('express-fileupload');

const routerCustomerAPI = express.Router();


routerCustomerAPI.get('/',  (req, res) => {
    res.status(200).json({
        message: "Hello from customer API"
    });
});

routerCustomerAPI.use(fileUpload());

routerCustomerAPI.post('/upload', postUploadSingleFile);

routerCustomerAPI.post('/customer', postCreateCustomer);

routerCustomerAPI.get('/customer', getAllCustomersAPI);



module.exports = routerCustomerAPI; 