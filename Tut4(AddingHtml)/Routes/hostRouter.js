const express = require('express');
const hostRouter = express.Router();
const path=require('path');
hostRouter.get('/host/add-home', (req, res, next) => {
  // res.send(`<h1>Add your home</h1>
  //   <form action="/host/add-home" method="POST">
  //   <input type="name"  name="houseName" />
  //   <input type="submit"/>
  //   </form>
  //   `);
  res.sendFile(path.join(__dirname,'../','view','addHome.html'));
});

hostRouter.post('/host/add-home', (req, res, next) => {
  console.log(req.body);

//   res.send(`
    
//  <h1>Home Added Successfully</h1>
   
//     `);
res.sendFile(path.join(__dirname,'../','view','homeAdded.html'));
});
module.exports=hostRouter;
