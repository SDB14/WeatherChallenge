$("#searchBtn").on("click",function(){
    var city=document.getElementById("search-value").value


    console.log(city)
    weatherSearch(city)
})

function weatherSearch(city){
    var weatherUrl="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8f0fa8364b82a56ff6b29b97a2963b6e&units=imperial"
fetch(weatherUrl)
// creating function to take in our input from search button into the weather url and then
//use a fetch to search url for weather data of that city and returns non-json
//data and then we json-ify (parse) the data to use on the front end
//second .then takes it and puts it in a way to use on the screen

.then(res => res.json())
.then(apiResponse=>{

    console.log(apiResponse)
    console.log(apiResponse.main.temp)
    console.log(apiResponse.coord.lat)
    console.log(apiResponse.main.humidity,apiResponse.main.feels_like)

var name=$("<h2>").text(apiResponse.name)
var temp=$("<p>").addClass("example").text("Temp: " + apiResponse.main.temp)
var humidity=$("<p>").text("Humidity: " + apiResponse.main.humidity)
var daysDate=$("<h3>").text(moment().format('dddd, MMMM Do'))
var card = $("<div>").addClass("card");
card.append(name, daysDate, temp, humidity)
    $("#current").append(card)

    




    getForecast(apiResponse.coord.lat, apiResponse.coord.lon)
})
}

function getForecast(lat,lon){
    var weatherUrl="https://api.openweathermap.org/data/2.5/onecall?lat=" + lat +"&lon=" + lon + "&appid=8f0fa8364b82a56ff6b29b97a2963b6e&units=imperial"
fetch(weatherUrl)
// creating function to take in our input from search button into the weather url and then
//use a fetch to search url for weather data of that city and returns non-json
//data and then we json-ify (parse) the data to use on the front end
//second .then takes it and puts it in a way to use on the screen

.then(res => res.json())
.then(apiResponse=>{

for (var i=1; i<apiResponse.daily.length-2; i++){
// every time we loop through the index do below:

var tempmax=$("<p>").addClass("example").text("Daily High: " + apiResponse.daily[i].temp.max)
var tempmin=$("<p>").addClass("example").text("Daily Low: " + apiResponse.daily[i].temp.min)
var humidity=$("<p>").text("Humidity: " + apiResponse.daily[i].humidity)
var forecasticon=$("<img>").addClass("iconsize").attr("src",`https://openweathermap.org/img/w/${apiResponse.daily[i].weather[0].icon}.png`)
var dailyDate=$("<h3>").text(moment().format('dddd, MMMM Do'))


    var card = $("<div>").addClass("card");
    card.append(dailyDate, forecasticon, tempmax,tempmin, humidity)
    $("#fivedayforecast").append(card)
}

    console.log(apiResponse)
    
})
}







