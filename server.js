const cors = require('cors')
const express = require("express");
const app = express();
const productsRouter = require('./products')

app.use(cors({
    origin:['http://localhost:5500', 'http://127.0.0.1:5500']
}))

app.use((req,res,next)=>{
    console.log(req.method, req.path)
    next()
})

app.use(express.json())

app.use('/products', productsRouter)

app.get("/", (req, res) => {
  res.send("hello get is working");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.get("/contact", (req, res) => {
  res.send("this is the contact page");
});


app.get("/message",(req,res)=>{
    res.json({message:"Hello from your express backend 😊"})
})

app.post('/message',(req,res)=>{
    const {name, message} = req.body
    
    console.log('new message: ',name,message)
    res.json({message:'thank you for your message'})
})

app.listen(3000, () => {
  console.log("The server is running");
});
