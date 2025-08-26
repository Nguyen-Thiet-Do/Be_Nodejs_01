
const { getAllUsers, createUser, updateUserById, deleteUserById } = require("../service/CRUDservice");

const getAllUserAPI = async (req, res) => {
    let results = await getAllUsers();
    return res.status(200).json({
        errorCode: 0,
        message: "Get all users successfully",
        data: results
    });
}

const postCreateUserAPI = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let user = await createUser(email, name, city);

    return res.status(200).json({
        errorCode: 0,
        message: "Create users successfully",
        data: user
    });
}

const putUpdateUserAPI = async (req, res) => {
    let id = req.body.id
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let user = await updateUserById(id, email, name, city);

    return res.status(200).json({
        errorCode: 0,
        message: "Update users successfully",
        data: user
    });
}

const delUserAPI = async (req, res) => {
    let Id = req.body.id;

    let user = await deleteUserById(Id);

    return res.status(200).json({
        errorCode: 0,
        message: "Update users successfully",
        data: user
    });

}

module.exports = {
    getAllUserAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    delUserAPI
};