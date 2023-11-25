const express = require("express"); //express ko import kara hai
const router = new express.Router(); //router method
const MenRanking = require("../models/mens")  //to import MenRanking from its file path

//code for POST 
router.post("/mens", async (req,res) => {    //async because it returns a promise
    try{
        const addingMensRecords = new MenRanking(req.body);     //request body me jo data hai vo addingMensRecords me variable me store hojaega
       
        const insertMens = await addingMensRecords.save();   //addingMensRecords me jo bhi records honge usko save krne k liye, We wrote await because it returns a promise, save is a mongoose method
        res.status(201).send(insertMens); //postman k request  section me insertMens send hojae
    }
    catch(e){
        res.status(400).send(e);   //agar koi error aaye to response me vo error likha aajae
    }
})
 //To handle get request
 router.get("/men", async (req,res) => {    //async because it returns a promise
    try{
        const getMen = await MenRanking.find({});  //find is a mongoose method
        res.status(201).send(getMen); //postman k request  section me insertMens send hojae
    }
    catch(e){
        res.status(400).send(e);   //agar koi error aaye to response me vo error likha aajae
    }
})

// If we want to get sorted data in assending oder according to ranking then we have to write get api code in this way:
// router.get("/men", async (req, res) => {
//     try {
//         const getMen = await MenRanking.find({}).sort({ ranking: 1 }).exec(); // Use .sort() to execute the query
//         res.status(200).send(getMen);
//     } catch (e) {
//         res.status(400).send(e);
//     }
// });

// To handle get request for individual
router.get("/man/:id", async (req, res) => {   //async because it returns a promise, id me particular data ki id pass krenge
    try {
        const _id = req.params.id;  //"/mens:id" ye wala id and req.params.id ye same hona chahiye, agar waha id ki jagah kuch aur hota to yaha bhi kuch aur likhte
        const getMan = await MenRanking.findById(_id); // Use _id directly, no need for { _id: _id },findById is the method of mongoose, _id:_id, data wali _id hai, const _id variable hai
         //we can also  write this bcz key-value are same (object destructuring), both ways are same
//         // const getMens = await MenRanking.findById({ _id: _id });
        res.send(getMan);
    } catch (e) {
        res.status(400).send(e);
    }
});

// we will handle patch request for individual update
router.patch("/man/:id", async (req, res) => {   //async because it returns a promise, id me particular data ki id pass krenge
    try {
        const _id = req.params.id;  
        const getMan = await MenRanking.findByIdAndUpdate(_id, req.body, {  //_id, req.body because jiss id ko hum update karenge vo humne body me bhi updated chahiye, findByIdAndUpdate is a mongoose method
            new: true   //postman me new updated data dekhne k liye
        }); 
        res.send(getMan);
    } catch (e) {
        res.status(500).send(e); //update karte wqt 500 error k liye likhate hai because server ka error 500 se start hota hai
    }
});
// we will handle delete request
router.delete("/man/:id", async (req, res) => {   //async because it returns a promise, id me particular data ki id pass krenge
    try {
        const _id = req.params.id;  
        const getMan = await MenRanking.findByIdAndDelete(_id);  //findByIdAndDelete is a mongoose method
        res.send(getMan);
    } catch (e) {
        res.status(500).send(e); //update karte wqt 500 error k liye likhate hai because server ka error 500 se start hota hai
    }
});
module.exports = router;  //router ko export kara haigit commit -m "first commit"