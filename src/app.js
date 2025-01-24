const express = require('express');

const app = express();

app.use("/",(req,res)=>{
  res.send('Hello from server for Home.......')
})

app.use("/ranjan",(req,res)=>{
  res.send('Hello from server.......')
})

app.listen('7777',()=>{
    console.log("Server is running successfully on port 7777")
})