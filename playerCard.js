const { default: mongoose } = require("mongoose")
const playerCard = require("mongoose")

const playerProfile = new mongoose.Schema({
    userName:String,
    email:String,
    firstName:String,
    lastName:String,
    age:Number,
    gender:{type:String,enum:['Male', 'Female', 'Other']},
    country:String,
    isActive:{type:Boolean,default:true},
    gamesPlayed:Number,
    level:{type:String,enum:['Beginner', 'Intermediate', 'Advanced', 'Expert']},
    preferredGame:String
},{timestamps:true})

const profileData = mongoose.module("player",playerProfile)

module.exports = profileData