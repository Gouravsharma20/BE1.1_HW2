const mongoose = require("mongoose")

const musicAlbum = mongoose.Schema({
    title:{type:String,required:true},
    artist:{type:String,required:true},
    genre:{type:String,enum:['Rock', 'Pop', 'Hip-Hop', 'Jazz', 'Classical', 'Country', 'Electronic', 'R&B', 'Reggae', 'Indie']},
    releaseYear:Number,
    recordLabel:String,
    format:String,
    isExplicit:Boolean,
    isAvailableOnStreaming:Boolean,
    isFeatured:Boolean
},{timeStamps:true})

const musicAlbums = mongoose.model("album",musicAlbum)

module.exports = musicAlbums