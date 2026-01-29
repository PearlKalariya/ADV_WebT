const http=require("http");
const fs=require("fs");

const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}: ${req.url} New request recieved\n`;
    fs.appendFile("log.txt",log,(err,data)=>{
        res.end("Hello from server again hellooooooo !!!!!!!!!!!!!!!!!!!!!!!!");
    })
    
    // res.end("Hello from server agai");
});

myServer.listen(5000,()=>{
    console.log("Server started");
});