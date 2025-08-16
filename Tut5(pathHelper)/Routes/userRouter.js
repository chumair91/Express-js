const express = require('express')
const userRouter = express.Router();
const path=require('path');
const rootDir=require('../utils/utilPath')
 userRouter.get("/", (req, res, next) => {
 
  // res.sendFile(path.join(__dirname,'../','view','home.html'));
  res.sendFile(path.join(rootDir,'view','home.html'));
});

module.exports=userRouter;