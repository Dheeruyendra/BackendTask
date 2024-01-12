const mongoose = require('mongoose');
const doenv = require('dotenv');

// Configuring environment variables from a .env file
doenv.config();

// Asynchronous function to establish a connection with MongoDB
const DBConnection = async () => {
    
    // Attempting to connect to MongoDB using Mongoose
    const Mongo_URL = process.env.MONGO_URL;

    try {
        await mongoose.connect(Mongo_URL);
        console.log("DB Connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = DBConnection;