const mongoose = require("mongoose")

const profileData = mongoose.Schema({
    userName:{type:String,required:true},
    userEmail:{type:String,required:true},
    userFirstName:String,
    userLastName:String,
    userBirthDate:Date,
    isActive:Boolean,
    isAdmin:Boolean,
    profilePictureUrl:String,

}, {timestamps:true} )

const profileModel = mongoose.model("profileInfo",profileData)

module.exports = profileModel
