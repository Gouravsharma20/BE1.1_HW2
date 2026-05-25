const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    make:String,
    model:String,
    year:Number,
    mileage:Number,
    fuelType:{type:String,enum:['Gasoline', 'Diesel', 'Electric', 'Hybrid']},
    transmission:{type:String,enum:['Automatic', 'Manual']},
    bodyStyle:String,
    color:String,
    isCertifiedPreOwned:{type:Boolean,default:false},
    isFourWheelDrive:{type:Boolean,default:false},
    isLuxury:{type:Boolean,default:false},
    isActive:{type:Boolean,default:true}
},{timestamps:true})

const CarsModel = mongoose.model("cars",carSchema)

module.exports = CarsModel