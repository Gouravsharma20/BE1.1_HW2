const mongoose = require("mongoose")

const postData = new mongoose.Schema({
    profileImg:String,
    profileName:String,
    post:String,
    sharedImg:String,
    likeCount:Number,
    shareCount:Number,
    commentCount:Number
})

const faceBookPost = mongoose.model("posts",postData)

module.exports = faceBookPost