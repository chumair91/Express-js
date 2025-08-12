const express=require('express')
const http=require('http');
const app=express()

// app.get('/',(req,res)=>{
//     res.send('Homepage');
    
// })
// app.get('/about',(req,res)=>{
//     res.send('about page');
// })
app.use((req,res,next)=>{
    console.log('came in first middleware',req.url,req.method);
    // res.send('<h1>hi how are you</h1>')
    next()
})

app.use((req,res,next)=>{
    console.log('came in second middleware',req.url,req.method);
    res.send('<h1>Second module says hi</h1>')
})
const server =http.createServer(app);
server.listen(5000,()=>{
    console.log(`server started at http://localhost:5000`);
    
})
