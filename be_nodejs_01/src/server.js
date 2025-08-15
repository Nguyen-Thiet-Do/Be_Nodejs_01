const express = require('express') // import express module
const app = express()

require('dotenv').config() // import dotenv module to use environment variables

const port = process.env.PORT || 8081 // khai báo port cho server
const hostName = process.env.HOST_NAME // khai báo tên máy chủ

const path = require('path') // import path module

// conflict template engine
app.set('view engine', 'ejs') // khai báo template engine
app.set('views', path.join(__dirname, 'views')) // khai báo thư mục chứa các file template


// conflict static files
app.use(express.static(path.join(__dirname, 'public'))) // khai báo thư mục chứa các file tĩnh

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.render('test.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
