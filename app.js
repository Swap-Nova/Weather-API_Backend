const express = require('express');
const app = express();
const https=require('https'); // it is an native node module 
const bodyParser=require('body-parser'); // body-parser for using html forms in backend 

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
});

app.post("/",function(req,res){
    // console.log("Post request received.");
    // console.log(req.body.cityName);

    const query=req.body.cityName;
    const unit="metric";
    const app_id=""; // add your own personal API key
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units="+unit+"&appid="+app_id;
 
     https.get(url,function(response){
        console.log(response.statusCode);
        
        // tapping into the response we get back
        response.on('data',function(data){
            // console.log(data);
            
            // writing in JSON format
            const weatherData=JSON.parse(data);
            console.log(weatherData);

            // printing a specific JSON object
            const temp=weatherData.main.temp;
            res.write("<h1>The current temperature in " + query + " is " + temp + " degree Celsius.</h1>");

            const weatherDescription=weatherData.weather[0].description;
            res.write("<h2>The weather currently is: " + weatherDescription +"</h2>");

            // live weather API, so we just have to use the JS object that we receive with the location added
            const weatherIcon=weatherData.weather[0].icon;
            const imageURL="http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
            res.write("<img src=" + imageURL + ">"); 

            res.send();

        })
    })
});

app.listen(3000,function(){
    console.log("Server is running at port 3000.");
});
