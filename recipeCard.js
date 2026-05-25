const mongoose = require("mongoose")

const recipeData = new mongoose.Schema({
    recipeImg:String,
    recipeName:String,
    recipeDesc:String,
    recipeServing:Number,
    recipePrepTime:Number,
    recipeCookingTime:Number,
    recipeIngredients:{type:String,enum:["100 ml milk","50gm butter","3 egg"]},
    recipeDirections:{type:String,enum:["Lorem Ipsum is simply dummy text of the printing and typesetting industry","Lorem Ipsum is simply dummy text of the printing and typesetting industry","Lorem Ipsum is simply dummy text of the printing and typesetting industry"],},
    notes:String
})

const recipeInfo = mongoose.model("recipe",recipeData)

module.exports = recipeInfo