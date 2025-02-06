const mongoose = require('mongoose');
require('dotenv').config();

// const connectionDB = async()=>{
//     await mongoose.connect("mongodb+srv://reactjsranjan:devtinder@devtinder.li80j.mongodb.net/devTinder")
// }


const connectionDB = async () => {
    try {
        const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@devtinder.li80j.mongodb.net/devTinder`;
        
        await mongoose.connect(MONGO_URI);

        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};

module.exports=connectionDB;

