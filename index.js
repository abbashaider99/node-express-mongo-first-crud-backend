let express = require("express");
let mongoose = require("mongoose");

let enquireModel = require("./App/models/enquire.model");
let enquiryRoutes = require("./App/routes/web/enquiriyRoutes");

require('dotenv').config();
let mongoURL = process.env.MONGO_URL;
let app = express();
let port = process.env.PORT || 3000;
app.use(express.json());

// Mount the enquiry routes
app.use("/web/api/enquiry", enquiryRoutes);

mongoose.connect(mongoURL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
});