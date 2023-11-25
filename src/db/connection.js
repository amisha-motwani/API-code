// //this file is created to connect our express application to database

// Code1:

const mongoose = require('mongoose');   //to require mongoose
const connect= async ()=>{

    await mongoose.connect('mongodb://127.0.0.1:27017/olymics').then(() => {   //if we fullfill the promise
        console.log("Connection Successful")
    }).catch((e) => {    //if we could'nt fullfill the promise, here we are using a call back function
        console.log("No Connection")
    })
}
connect();