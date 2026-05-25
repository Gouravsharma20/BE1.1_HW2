const { default: mongoose } = require("mongoose");

const stayData = new mongoose.Schema({
    title:String,
    description:String,
    location:String,
    pricePerNight:Number,
    capacity:Number,
    isPetFriendly:{type:Boolean,default:false},
    hasWifi:{type:Boolean,default:false},
    hasParking:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true}
},{timestamps:true})

const stayProperty = mongoose.model("propertyData",stayData)

module.exports = stayProperty