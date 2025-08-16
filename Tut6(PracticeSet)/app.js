const express = require('express');
const path = require('path');
const app = express();
const rootDir = require('./utils/utilPath');
const homeRouter=require('./routes/homeRouter')
const contactRouter=require('./routes/contactRouter')

app.use((req,res,next)=>{
  console.log( req.url, req.method);
  next()
})
app.use(express.urlencoded());
app.use(homeRouter);
app.use(contactRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404.html'))
})
const port = 5000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
