const mongoose = require('mongoose');

const connectionDB = async()=>{
    await mongoose.connect("mongodb+srv://reactjsranjan:devtinder@devtinder.li80j.mongodb.net/devTinder")
}


module.exports=connectionDB;

// connectionDB().then(
//     ()=>{
//         console.log("Database connected Succesfully")
//     }
// ).catch(
//     (err)=>{
//      console.error("Database can't connected successfully")
//     }
// )