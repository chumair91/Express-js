const express = require('express');
const hostRouter = express.Router();

hostRouter.get('/host/add-home', (req, res, next) => {
  res.send(`<h1>Add your home</h1>
    <form action="/host/add-home" method="POST">
    <input type="name"  name="houseName" />
    <input type="submit"/>
    </form>
    `);
});

hostRouter.post('/host/add-home', (req, res, next) => {
  console.log(req.body);

  res.send(`
    
 <h1>Home Added Successfully</h1>
   
    `);
});
module.exports=hostRouter;
