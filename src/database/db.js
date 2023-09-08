const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/MyDatabase";
mongoose.connect(url).then(()=>{
    console.log("Connected to database successfully");
}).catch((error)=>{
    console.log("Something went wrong")
})