const express = require("express");
const https = require("https");
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

app.get("/bmi", function(req,res)
{
 res.sendFile(__dirname+"/bmi.html");
});

app.get("/weather",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=654345788dee3a1050b0258ca41910c9";
    https.get(url,function (response) {
        
        response.on("data",function (data) {
        const WeatherData = JSON.parse(data);
        const discription = WeatherData.weather[0].description;
        const temp = WeatherData.main.temp;
                
                res.write("<p> the weather in chennai is kind a like "+discription+" and the temperature is "+temp+" </p>");
                res.write("<h1> the weather in chennai is kind a like "+discription+" and the temperature is "+temp+"</h1>");
                res.send();
        })
    })
});



app.post("/",function(req,res){
    var feet = Number(req.body.feet);
    var kilogram = Number(req.body.kg);
    var bmi = kilogram/feet;
    var advice;
    if(bmi<18.5){
        advice ="under";
    }else if(bmi >=18.5 & bmi < 25){
        advice ="normal";
    }else{
        advice ="Over";
    }
    res.send("<h1>your BMI is "+bmi+" and you are "+advice+" weight.</h1>");
});

app.listen(3000, function(){
    console.log("The server is running on port 3000");
});


