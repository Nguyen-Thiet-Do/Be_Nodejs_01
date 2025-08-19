const connection = require("../config/database");

const { getAllUsers, getUserById, updateUserById, createUser , deleteUserById} = require("../service/CRUDservice");

const getHomePage = async (req, res) => {
  let rows = await getAllUsers();
  return res.render('home.ejs', { listUsers: rows });
}

const getTestPage = (req, res) => {
  res.render('test.ejs');
}

const getCreatePage = (req, res) => {
  res.render('create.ejs'); 
}

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;
  console.log(email, name, city);
  await createUser(email, name, city);
  res.redirect('/');
}

const getUpdatePage = async (req, res) => {
  let userId = req.params.id;
  let user = await getUserById(userId); //
  return res.render('edit.ejs', { user: user });
}

const postUpdateUser = async (req, res) => {
  let { userId, email, name, city } = req.body;
  console.log(userId, email, name, city);
  await updateUserById(userId, email, name, city);
  res.redirect('/'); 
}

const postDeleteUser = async (req, res) => {
  let userId = req.params.id;
  let user = await getUserById(userId);
  res.render('cfDelete.ejs' , {user: user});
}

const postHandleRemoveUser = async (req, res) => {
  let userId = req.body.userId;
  console.log("userId: ", userId);
  await deleteUserById(userId);
  res.redirect('/');

}

module.exports = {
  getHomePage,
  getTestPage,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser
}; 