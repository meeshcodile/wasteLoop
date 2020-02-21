const mongoose = require("mongoose")
const {Schema} = mongoose


const userSchema = new Schema({
    // registration
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true
    },
    phoneNo:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true,
    },
    psw:{
        type: String,
        required: true,
    },
    cpsw:{
        type: String,
        required: true,
    }, 
    active: Boolean
})
const User = mongoose.model('User', userSchema)
module.exports = User;