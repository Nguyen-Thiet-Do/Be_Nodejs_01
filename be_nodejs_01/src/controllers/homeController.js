const connection = require("../config/database");

const{ getAllUsers } = require("../service/CRUDservice");

const getHomePage = async (req, res) => {

  let rows = await getAllUsers(); 
  return res.render('home.ejs', {listUsers: rows}); 
}

const getTestPage = (req, res) => {
  res.render('test.ejs');
}

const getCreatePage = (req, res) => {
  res.render('create.ejs'); // render the create page
}

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body; // destructuring to get email, name, and city from request body
  console.log(email, name, city);

  const [rows, fields] = await connection.query(
    `INSERT INTO Users(email, name, city) VALUES(?, ?, ?)`,[email, name, city],
  )
  console.log('check results:', rows);
  
  res.send('Create user success!'); 
}

  module.exports = {
    getHomePage,
    getTestPage,
    postCreateUser,
    getCreatePage
  }; // export the function to use in routes