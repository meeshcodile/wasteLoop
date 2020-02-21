const mongoose = require("mongoose")
const {Schema} = mongoose


const reportSchema = new Schema({
    // registration
    reportFullName:{
        type: String,
        required: true,
    },
    reportPhoneNo:{
        type: String,
        required: true,
        unique: true
    },
    reportAddress:{
        type: String,
        required: true,
    },
    reportPickUpDay:{
        type: Date,
        required: true
    },
    reportPickUpTime:{
        type: String,
        required: true
    },
    reportDetails:{
        type: String,
        unique: true
    },
    active: Boolean
})
const Report = mongoose.model('Report', reportSchema)
module.exports = Report;