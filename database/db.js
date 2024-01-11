const mongoose = require('mongoose');
const doenv = require('dotenv');    

doenv.config();

const DBConnection = async () => {
    const Mongo_URL = process.env.MONGO_URL;
    //console.log(Mongo_URL);

    try{
        await mongoose.connect(Mongo_URL);
        console.log("DB Connected");
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports =   DBConnection;