const express = require("express");
const app = express();
const port = 3000;
const userRouter=require("./Routes/userRouter");
const hostRouter = require("./Routes/hostRouter");
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);



app.listen(port, () =>
  console.log(`Example app listening on http://localhost:${port}`)
);
