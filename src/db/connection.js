// //this file is created to connect our express application to database

// Code1:


const mongoose = require('mongoose');   //to require mongoose
require("dotenv").config();
const connect= async ()=>{

    await mongoose.connect(`mongodb+srv://${process.env.REACT_APP_USERNAME}:${process.env.REACT_APP_PASSWORD}@cluster0.mdcl1f0.mongodb.net/?retryWrites=true&w=majority/olymics`).then(() => {   //if we fullfill the promise
        console.log("Connection Successful")
    }).catch((e) => {    //if we could'nt fullfill the promise, here we are using a call back function
        console.log("No Connection")
    })
}
connect();
