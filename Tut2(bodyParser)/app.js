const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', (req, res, next) => {
  console.log('handling / for get', req.url, req.method);
  res.send('welcome to homepage');
});
app.get('/contact-us', (req, res, next) => {
  console.log('handling contact us', req.url, req.method);
  res.send(`
        <form action="/contact-us" method="POST"> 
        <input type="text" name="name" placeholder="Enter your name"/>
        <input type="email" name="email" placeholder="Enter your email"/>
        <input type="submit"/>
        </form>
       
        `);
});

app.post('/contact-us',(req,res,next)=>{
    console.log('handling post first',req.url,req.method);
    // res.send("we will contact you shortly")
    next();
})
app.use(bodyParser.urlencoded())
app.post('/contact-us',(req,res,next)=>{
    console.log('handling post',req.url,req.method,req.body);
    res.send("we will contact you shortly")
    
})
const port=5000;
app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`);
    
})