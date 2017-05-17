const express=require("express");
const _=require("lodash");
const yargs=require("yargs");
const fs=require("fs");
const hbs=require("hbs");

var app=express();
app.use(express.static(__dirname+"/index"));
app.set("view engine","hbs");


var person={
  name:"mike",
  age:23,
  address:"austin tx"
};

var newPerson=JSON.stringify(person);

fs.appendFile("text.txt","hello how u doin man");
fs.writeFile("text.json",newPerson);
fs.readFile("text.json");

var command=process.argv[2];
var argv=yargs.argv;


app.get("/about",(req,res)=>{

res.render("index.hbs",{
  name:"handle",
  addres:"california"
});
});




app.listen(3000,()=>{
  console.log("app is running on port 3000");
});
