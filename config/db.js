const mongoose = require('mongoose');
const colors = require('colors');
const connectDB = async () =>{
    try {
            await mongoose.connect(process.env.MONGODB_URL)
            console.log(`Connect To Mongodb Database ${mongoose.connection.host}`.bgMagenta.white);
    }
    catch (error){
        console.log(`Mongodb database Error ${error}`.bgRed.white)
    }
}

module.exports = connectDB


// PWD =  P5e28bmnX4fTh4dm