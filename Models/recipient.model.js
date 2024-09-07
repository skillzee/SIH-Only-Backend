const mongoose = require("mongoose")


const recipientSchema = new mongoose.Schema({
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


const Reciepient = mongoose.model("Reciepient", recipientSchema);

module.exports= {Reciepient};
