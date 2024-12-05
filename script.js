var express=require("express");
var app=express();
var cors=require("cors");
var fs=require("fs");
app.use(cors());
app.use(express.json())
app.get("/food",(req,res)=>{
    fs.readFile("db.json","utf-8",(err,data)=>{
        if(err){
            res.send(err.message)
        }
        else{
            res.send(data)
        }
    })
});

port=3000;
app.listen(port,()=>{
    console.log("server is running")
})