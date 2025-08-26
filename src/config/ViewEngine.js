const path = require('path'); // import path module
const express = require('express'); // import express module

const configViewEngine = (app) => {

    // conflict template engine
    app.set('view engine', 'ejs') // khai báo template engine
    app.set('views', path.join('./src', 'views')) // khai báo thư mục chứa các file template

    // conflict static files
    app.use(express.static(path.join('./src', 'public'))) // khai báo thư mục chứa các file tĩnh
}

module.exports = configViewEngine; // export the function to use in server.js