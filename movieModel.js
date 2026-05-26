const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    _id: String,
    title:String,
    releaseYear:Number,
    genre:[{type:String,enum:["Romance","Drama","Action","Fantasy","Sports"]}],
    director:String,
    actors:[{type:String,enum:["Shah Rukh Khan","Kajol","Prabhas","Anushka Shetty","Aamir Khan","Gracy Singh","Salman Khan","Kareena Kapoor","Aamir Khan","Ranveer Singh","Alia Bhatt"]}],
    language:String,
    country:String,
    rating:Number,
    plot:String,
    awards:String,
    posterUrl:String,
    trailerUrl:String
},{timestamps:true})

const MovieModel = mongoose.model("movie",MovieSchema)

module.exports = MovieModel