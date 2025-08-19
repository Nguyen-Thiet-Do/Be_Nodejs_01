const connection = require("../config/database");

const createUser = async (email, name, city) => {
  let [rows, fields] = await connection.query(
    `INSERT INTO Users(email, name, city) VALUES(?, ?, ?)`, [email, name, city]
  );
}

const getAllUsers = async (req, res) => {
  let [rows, fields] = await connection.query('select * from Users');
  return rows;
}

const getUserById = async (id) => {
  let [rows, fields] = await connection.query('select * from Users where id = ?', [id]);
  let user = rows && rows.length > 0 ? rows[0] : {};
  return user;
}

const updateUserById = async (id, email, name, city) => {
  let [rows, fields] = await connection.query(
    `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, id]);
  
}

const deleteUserById = async (id) => {
  let [rows, fields] = await connection.query('DELETE FROM Users WHERE id = ?', [id]);
}

module.exports = {
  getAllUsers, getUserById, updateUserById, createUser, deleteUserById
}