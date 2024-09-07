const mongoose = require("mongoose")


const donorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    
})


const Donor= mongoose.model("Donor", donorSchema);

module.exports= {Donor};
