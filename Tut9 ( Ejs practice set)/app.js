const express = require("express");
const app = express();
const port = 3000;
const userRouter=require("./Routes/userRouter");
const {hostRouter} = require("./Routes/hostRouter");
const path=require('path')
const rootDir=require('./utils/utilPath')
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views','views');
app.use(userRouter);
app.use(hostRouter);
app.use(express.static("public"));

app.use((req,res,next)=>{
// res.sendFile(path.join(__dirname,'view','404.html'));
// res.sendFile(path.join(rootDir,'views','404.html'));
res.render('404',{content: 'Page not found',title: '404 page'});
})

app.listen(port, () =>
  console.log(`Example app listening on http://localhost:${port}`)
);
