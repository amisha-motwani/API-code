const mongoose = require("mongoose");
const menSchema = new mongoose.Schema({
    name:{
        type:String,    //name ka datatype string hoga
        required:true,   //required means ye imp hai
        trime:true  // name k pehle ya name k baad agar unecessary space hai to usko trim kr denge
    },
    dob:{
        type:Date,   //dob ka datatype/format date hoga
        required:true,   //required means ye imp hai
        trime:true  // dob k pehle ya dob k baad agar unecessary space hai to usko trim kr denge
    },
    country:{
        type:String,    //country ka datatype string hoga
        required:true,   //required means ye imp hai
        trime:true  // country k pehle ya country k baad agar unecessary space hai to usko trim kr denge
    },
    score:{
        type:Number,    //datatype number hoga
        required:true,   //required means ye imp hai
        trime:true  // extra space trim krne k liye
    }, 
    ranking:{
        type:Number,    //datatype number hoga
        required:true,   //required means ye imp hai
        unique: true
    }, 
    event:{
        type:String,    //datatype string hoga
        default:"100m"   //hum data 100 meter racing k liye hi create kr rhe hai to sab athelite 100 meter wale hi hone islie humne isko "as a default" set kra hai
    }, 

})

//We are creating a new connection:
module.exports = new mongoose.model("MenRanking", menSchema )   //MenRanking naam ka collection bnaya hai, its first letter should be capital

// module.exports = MensRanking;  //humne MensRanking ko export kara hain taaki hum isse baaki jagah use kr sake