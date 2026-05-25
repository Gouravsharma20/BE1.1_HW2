const mongoose = require("mongoose")

const OrderData = new mongoose.Schema({
    prodName:String,
    prodRating:Number,
    prodPrice:Number,
    availableOffers:{type:String,enum:["5% cashbak","12.5% off"]},
    warrentyTerms: String,
    varient:{type:String,enum:["2023 Model 1 Ton","2024 model 1.5 ton"]}
})

const OrderDetails = mongoose.model("order",OrderData)

module.exports = OrderDetails