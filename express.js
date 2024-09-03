const port = 8000;

import express from "express"
import fs from "fs"

const server  = express()

server.use(express.json())

server.get("/", (req,res)=>{
    let {body} = req;

    // res.send({message : "Hi"})
    // res.send("Hi")

    fs.readdir("Files/",(err,files)=>{
        
        // files.forEach(file => {
        //     console.log(file);
            
        // })

        // console.log(files);
        res.send({Files : files})
        
    })

})

server.post("/", (req,res)=>{
    let body = req.body
    
    let dateTime = Date.now().toString();
    let textFileContent = Date().toString();

    fs.writeFile(`Files/${dateTime}.txt`, textFileContent, ()=>{
        console.log("File created successfully");
    })
    
    res.send("File created. File location: " + `Files/${dateTime}.txt`)
})

server.listen(port,()=>{
    console.log(Date().toString(), "Server running on port:", port);
});