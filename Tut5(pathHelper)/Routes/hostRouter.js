const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/utilPath');

hostRouter.get('/host/add-home', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../', 'view', 'addHome.html'));
  res.sendFile(path.join(rootDir, 'view', 'addHome.html'));
});

hostRouter.post('/host/add-home', (req, res, next) => {
  console.log(req.body);

 
  res.sendFile(path.join(rootDir, 'view', 'homeAdded.html'));
});
module.exports = hostRouter;
