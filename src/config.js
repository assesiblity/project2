const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");
//check database
connect.then(()=>{
   console.log("Database connected Succesfully");
})
.catch(()=>{
    console.log("Database cannot be connected");
});

//Creat a Scheme

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true

    },
    password: {
        type: String,
        required:true
    }
});
//collection Part
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;