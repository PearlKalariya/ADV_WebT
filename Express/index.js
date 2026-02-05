const http=require("http");
const express= require("express");

const app=express();

app.get("/",(req,res)=>{
   return res.send("home page")
});
app.get("/about",(req,res)=>{
    const name=req.query.name;
    return res.send(`hey there ${name}`)
});
const server=http.createServer(app);

server.listen(3000,()=>{
    console.log("server is running on port 3000");
});