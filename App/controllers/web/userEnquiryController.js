
let enquireModel = require("../../models/enquire.model");

// Fetch all user enquiries
let getUserEnquiries = async (req, res) => {

    try {
        const data = await enquireModel.find();
        res.status(200).send({
            status: 1,
            message: "Enquiries fetched successfully",
            data: data
        });
    } catch (err) {
        res.status(500).send({
            status: 0,
            message: "Error fetching enquiries",
            error: err.message
        });
    }

};

// Add a new user enquiry
let addEnquiry = async (req, res) => {

    try {
        let { sname, semail, sphone, smessage } = req.body;
        let newEnquiry = enquireModel({
            name: sname,
            email: semail,
            phone: sphone,
            message: smessage
        })

        let result = await newEnquiry.save();
        res.status(200).send({ status: 1, message: "Enquiry saved successfully", data: result })
    } catch (err) {
        console.error("Error saving enquiry:", err.message);
        res.status(500).send({ status: 0, message: "Error saving enquiry", error: err.message });
    }
};

// Delete an enquiry by ID
let deleteEnquiry = async (req, res) => {
    let id = req.params.id;
    await enquireModel.findByIdAndDelete(id).then(data => {
        res.status(200).send({
            status: 1,
            message: "Enquiry deleted successfully",
            data: data
        })
    }).catch(err => {
        res.status(500).send({
            status: 0,
            message: "Error deleting enquiry",
            error: err.message
        })
    })
};

// Update an enquiry by ID
let updateEnquiry = async (req, res) => {
    let id = req.params.id;
    let { sname, semail, sphone, smessage } = req.body;
    let updateData = {
        name: sname,
        email: semail,
        phone: sphone,
        message: smessage
    }
    await enquireModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).then(data => {
        res.status(200).send(
            { status: 1, message: "Enquiry updated successfully", data: data });
    }).catch(err => {
        res.status(500).send({ status: 0, message: "Error updating enquiry", error: err.message });
    });
};


module.exports = { getUserEnquiries, addEnquiry, deleteEnquiry, updateEnquiry };