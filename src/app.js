const express = require('express');

const app = express();



app.get("/user/:userId/:name",(req,res)=>{
  console.log(req.params);
  res.send({FirstName:"Soumyaranjan",LastName:"Nayak"})
})

app.post("/user",(req,res)=>{
  res.send("User save Successfully")
})
app.delete("/user",(req,res)=>{
  res.send("User deleted Successfully")
})
app.use("/ranjan",(req,res)=>{
  res.send('Hello from server.......')
})



app.listen('7777',()=>{
    console.log("Server is running successfully on port 7777")
})