const User = require("../models/users");


const createUser = async (email, name, city) => {
  let user = await User.create({
    email: email,
    name: name,
    city: city
  });

  return user;
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
  let user = await User.updateOne(
    { _id: id },
    {
      email: email,
      name: name,
      city: city
    })

  return user
}

const deleteUserById = async (id) => {
  let user = await User.deleteOne({ _id: id });
  return user
}

module.exports = {
  getAllUsers, getUserById, updateUserById, createUser, deleteUserById
}