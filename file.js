const fs=require('fs');

fs.writeFileSync('./example.txt','krish is water type pokemon');   

fs.appendFile('./example.txt',' krish is water type pokemon',(err)=>{});

fs.readFile('./example.txt','utf-8',(err,data)=>{
    if(err) {
        console.log("error occured");
    } 
    else {
        console.log(data);
    }
});