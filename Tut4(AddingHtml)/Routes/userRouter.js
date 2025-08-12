const express = require('express')
const userRouter = express.Router();
const path=require('path');

 userRouter.get("/", (req, res, next) => {
  // res.send(
  //   `<h1>welcome to airbnb</h1>
  //       <a href="/host/add-home">Add Home</a>`
  // );
  res.sendFile(path.join(__dirname,'../','view','home.html'));
});

module.exports=userRouter;