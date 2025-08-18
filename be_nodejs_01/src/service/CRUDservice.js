const connection = require("../config/database");


const getAllUsers = async (req, res) => {
  let [rows, fields] = await connection.query('select * from Users');
  return rows; 
}

module.exports = {
  getAllUsers,  
}