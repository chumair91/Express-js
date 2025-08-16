const express = require("express");
const app = express();
const port = 3000;
const userRouter=require("./Routes/userRouter");
const hostRouter = require("./Routes/hostRouter");
const path=require('path')
const rootDir=require('./utils/utilPath')
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
// res.sendFile(path.join(__dirname,'view','404.html'));
res.sendFile(path.join(rootDir,'view','404.html'));
})

app.listen(port, () =>
  console.log(`Example app listening on http://localhost:${port}`)
);
