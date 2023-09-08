const mongoose = require("mongoose");

const Registration_Schema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String
})

const RegistrationData = new mongoose.model("Registration-Data",Registration_Schema);
module.exports =RegistrationData;