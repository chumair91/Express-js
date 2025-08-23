const express = require('express');
const userRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/utilPath');
const {hostRouter, registeredHomes}=require('./hostRouter')

userRouter.get('/', (req, res, next) => {
  // res.sendFile(path.join(__dirname,'../','view','home.html'));
  console.log(registeredHomes);
  
  // res.sendFile(path.join(rootDir, 'views', 'home.html'));
  res.render('home',{  content:'Welcome to Airbnb',registeredHomes : registeredHomes, title: 'AirBnb Home'})
});

module.exports = userRouter;
