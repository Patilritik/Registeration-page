const express = require("express");
const database = require("./database/db");
const Registration = require("./mongoose/mongoose");
const path = require("path");
const mongoose = require("mongoose");
const app = express();

const template_path = path.join(__dirname,"../views");



app.use(express.urlencoded({extended:false}))

app.set("view engine",'hbs');
app.set("views",template_path);


app.get("/",(req,res)=>{
 res.render("index")
})

app.post("/Submit-form",async(req,res)=>{
    const Registration_user_data = new Registration({
    name : req.body.name,
    email: req.body.email,
    phone : req.body.phone,
    password: req.body.password
    })

    const Display_to_user = await Registration_user_data.save();
    res.send(`Welcome to the page Dear ${req.body.name}`);
});


app.listen(2000);
