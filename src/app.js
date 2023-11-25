const express = require ("express");  //means import express from express
// const bodyParser = require('body-parser');
const router = require("../src/db/routers/methods")
require("../src/db/connection");  //to import connection page in the main page(root page) of our application
// const MenRanking = require ("../src/db/models/mens");

const app = express();   //in this app variable, we can use all the methods/properties of express if we call it like this  
const port = process.env.PORT || 3000; //API live hota hai future me to env k according port le lega otherwise 3000 pr hi chalega
app.use(express.json());  //hum postman se jo data send krenge vo pure json format me hoga, but express application json format ko accept nhi krta islie hum json data ko express application me us krne k liye ye likhte hai 
app.use(router);  //take permission from app and use router for all the methods

//Code for GET
app.get("/", async(req,res) => {   //at the root, Created it as a async function, it has two parameters (request and response).
    res.send("Hello from Amisha");  //to check if response is getting sent or not, WE CA SEE THIS AT localhost:3000 
})

//server listen karne k liye
app.listen(port, ()=>{  //app.listen to listen our application, THEN A CALL BACK function
 console.log(`connection is live at port no. ${port}`); //this will be in terminal
})

