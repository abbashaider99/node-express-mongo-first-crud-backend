let express = require("express");
const { getUserEnquiries, deleteEnquiry, addEnquiry, updateEnquiry } = require("../../controllers/web/userEnquiryController");


let enquireRoutes = express.Router();

enquireRoutes.get("/enquiry", getUserEnquiries );
enquireRoutes.delete("/delete-enquiry/:id", deleteEnquiry );
enquireRoutes.post("/new-enquiry", addEnquiry);
enquireRoutes.put("/update-enquiry/:id", updateEnquiry);

module.exports = enquireRoutes;