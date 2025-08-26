const Custommer = require("../models/customer");

const path = require("path");

const UploadSingleFile = (fileObj, timestamps) => {
    return new Promise((resolve, reject) => {
        const parsed = path.parse(fileObj.name);
        const filename = `${parsed.name}-${timestamps}${parsed.ext}`;
        const uploadDir = path.join(__dirname, "../public", "uploads");

        const uploadPath = path.join(uploadDir, filename);

        fileObj.mv(uploadPath, (err) => {
            if (err) {
                return reject({
                    status: "failed",
                    message: JSON.stringify(err.message),
                    path: null,
                });
            }

            resolve({
                status: "success",
                message: null,
                path: uploadPath,
            });
        });
    });
};

const uploadMuliFile = (fileObjs, timestamps) => {
    return new Promise((resolve, reject) => {
        const parsed = path.parse(fileObj.name);
        const filename = `${parsed.name}-${timestamps}${parsed.ext}`;
        const uploadDir = path.join(__dirname, "../public", "uploads");

        const uploadPath = path.join(uploadDir, filename);

        fileObj.mv(uploadPath, (err) => {
            if (err) {
                return reject({
                    status: "failed",
                    message: JSON.stringify(err.message),
                    path: null,
                });
            }

            resolve({
                status: "success",
                message: null,
                path: uploadPath,
            });
        });
    });
};


const createCustomer = async (name, address, phone, email, image, description ) => {
    let customer = await Custommer.create({
        name: name,
        address: address,
        phone: phone,
        email: email,
        image: image,
        description: description
    });

    return customer;
    
};

const getAllCustomers = async () => {
    return await Custommer.find().exec();
}

module.exports = {
    UploadSingleFile, uploadMuliFile, createCustomer, getAllCustomers
};
