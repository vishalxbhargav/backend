const mongoose=require('mongoose');
require('dotenv').config();

const connect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("Databse Connection is Successfull"))
    .catch((err)=>{
        console.log("Issue in Database Connection")
        console.log(err.message);
    })
}

module.exports={connect};
