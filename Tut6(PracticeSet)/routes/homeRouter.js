const express = require('express');
const path=require('path')
const rootDir=require('../utils/utilPath')
const homeRouter = express.Router();
homeRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports=homeRouter; 