const express = require("express");
const bodyParser = require("body-parser"); 

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res)
{
 res.send("<h1>hello this is my website</h1>");
});

app.get("/contact", function(req,res)
{
 res.send("<h1>Contact me @ 12345</h1>");
});

app.get("/about", function(req,res)
{
 res.send("<h1>Hi iam gokul</h1><h2>iam a Dot Net developer</h2>");
});

app.get("/cal", function(req,res)
{
 res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
    var numb1=Number(req.body.num1);
    var numb2=Number(req.body.num2);
    var result = numb1+numb2;
    res.send("the addition of 2 number is : "+result);
});

app.listen(3000, function(){
    console.log("The server is running on port 3000");
});
