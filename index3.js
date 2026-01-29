const http=require("http");
const fs=require("fs"); 

const myServer=http.createServer((req,res)=>{
    const log=`${Date()}: ${req.url} New request recieved\n`;
    fs.appendFile("log2.txt",log,(err,data)=>{
        switch(req.url){
            case '/':
                res.end("Hello from Home Page!");
                break;
            case '/about':
                res.end("Hello from About Page!");
                break;
            default:
                res.end("404 Page Not Found");
        }
    });
});

myServer.listen(5000,()=>{
    console.log("Server started");
});