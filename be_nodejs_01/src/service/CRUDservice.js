const connection = require("../config/database");
const User = require("../models/users");


const createUser = async (email, name, city) => {
  await User.create({
    email: email,
    name: name,
    city: city
  });
}

const getAllUsers = async (req, res) => {
  return rows = await User.find().exec();
}

const getUserById = async (id) => {
  let user = await User.findById(id).exec();
  if (!user) {
    throw new Error("User not found");
  }
  console.log(">>>>>>>>>>>>>>>>>>user: ", user);
  return user;
}

const updateUserById = async (id, email, name, city) => {
  await User.updateOne(
    { _id: id },
    {
      email: email,
      name: name,
      city: city
    })
}

const deleteUserById = async (id) => {
  await User.deleteOne({_id: id});
}

module.exports = {
  getAllUsers, getUserById, updateUserById, createUser, deleteUserById
}