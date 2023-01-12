## Why do we need APIs?
<p> An API is a set of commands, protocols, and objects that programmers can use to create software or interact with an external system. Eg: jQuery</p>

## About the Project
* The primary focus of this repository is to demonstrate the implementation of APIs by using backend applications. </p>
* It is an weather web application that showcases the real-time weather of the country inputed the user in Celisus form. </p>
* We have used <a href="https://openweathermap.org/weather-conditions">Open Weather API </a> which is an open-source real-time weather API. </p>
* Moreover, for authentication we have used POSTMAN to create a GET request. 

## GET Requests 
Created GET requests with the node HTTPS module. Here we are using the native HTTP standard library. 
* Firstly, we get hold of our HTTP. 
* Then we use the GET method for our HTTP and then request it. We can either log the HTTP request or simply just get hold of the data. 

## Parse JSON
The ```JSON.parse()``` static method parses a JSON string, constructing the JavaScript value or object described by the string.

## Running the server:
* Inside the terminal, navigate to your directory where you have installed the repo files and type:
```
nodemon app.js
```
#### OUTPUT
<img width="600" height="400" alt="image" src="https://user-images.githubusercontent.com/92979885/211990208-57273ccd-6e64-4ead-a0b5-e4580f46b9ad.png">

*<i> PS: One has to use their our own personal API key that can be created by making an account on the website mentioned above. </i>
