const mongoose = require("mongoose");



async function connetDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Database connected successfully");

    }catch(err){
        console.log("Database connection error:",err);
    }
}

module.exports = connetDB;