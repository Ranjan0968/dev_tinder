const express = require('express');
const connectionDB = require('./config/database');
const User = require("./models/userSchema")
require('dotenv').config();

const app = express();

app.use(express.json());

// signup api

app.post("/signup",async(req,res)=>{
  // create a instance of user
  const user = new User(req.body)
  // save data in db
  try {
   await user.save();
    res.send("User saved Successfully")
  } catch (error) {
    
  }
})

app.get("/user",async(req,res)=>{
  const userByEmail = req.body.emailId;

  try {
    const getUser = await User.find({emailId:userByEmail})
    res.send(getUser)
  } catch (error) {
    
  }
})
app.get("/feed",async(req,res)=>{
  try {
    const users = await User.find({})
    res.send(users)
  } catch (error) {
    
  }
})

app.delete("/user",async(req,res)=>{
  const userId = req.body.userId;

  try {
    const deleteUserById = await User.findByIdAndDelete({_id:userId});
    res.send(deleteUserById);
  } catch (error) {
    res.status(404).send("Something went wrong to delete user")
  }
})

app.patch("/user",async(req,res)=>{
  const userId = req.body.userId;
  const data = req.body
  try {
    const user = await User.findByIdAndUpdate(userId,data);
    res.send("User update successfully");
  } catch (error) {
    res.status(404).send("Something went wrong to update user");
  }
})


connectionDB().then(
  ()=>{
      console.log("Database connected Succesfully")
      app.listen(process.env.PORT,()=>{
        console.log(`Server is running successfully on port ${process.env.PORT}`)
    })
  }
).catch(
  (err)=>{
   console.error("Database can't connected successfully")
  }
)



