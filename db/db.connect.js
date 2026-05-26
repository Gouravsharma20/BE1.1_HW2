require("dotenv").config()
console.log("URI:", process.env.MONGODB_URI)

const mongoose = require("mongoose")



const uri = process.env.MONGODB_URI

const initializeDb = async () => {
    await mongoose.connect(uri).then(()=>console.log("databse connected successfully")).catch((err)=>console.log("Error loading connection : ",err))

}

module.exports = {initializeDb}
