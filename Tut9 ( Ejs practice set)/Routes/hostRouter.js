const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/utilPath');

hostRouter.get('/host/add-home', (req, res, next) => {
  // res.sendFile(path.join(__dirname, '../', 'view', 'addHome.html'));
  // res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
  res.render('addHome');
  res.render('addHome',{content:'Add your Home',title: 'Add Home'});
});
const registeredHomes = [];

hostRouter.post('/host/add-home', (req, res, next) => {
  registeredHomes.push({ houseName: req.body.houseName });

  // res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));

  res.render('homeAdded',{content: 'Home Added Successfully',title:"Success"});
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
