const { UploadSingleFile, createCustomer, getAllCustomers } = require('../service/CRUDcustommer');



const postUploadSingleFile = async (req, res) => {
    const timestamps = Date.now();
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            message: "No files were uploaded.",
        });
    }

    try {
        const result = await UploadSingleFile(req.files.image, timestamps);

        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};


const getAllCustomersAPI = async (req, res) => {
    try {
        const customers = await getAllCustomers();
        res.status(200).json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}



const postCreateCustomer = async (req, res) => {
    const { name, address, phone, email, description } = req.body;

    try {
        let image = null;
        if (req.files && req.files.image) {
            const timestamps = Date.now();
            const uploadResult = await UploadSingleFile(req.files.image, timestamps);

            if (uploadResult.status === "success") {
                image = uploadResult.path; 
            } else {
                return res.status(400).json({
                    message: "Upload image failed",
                    error: uploadResult.message
                });
            }
        }

        const customer = await createCustomer(
            name,
            address,
            phone,
            email,
            image,
            description
        );

        res.status(201).json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    postUploadSingleFile, postCreateCustomer, getAllCustomersAPI
};