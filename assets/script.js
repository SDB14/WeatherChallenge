$("#searchBtn").on("click",function(){
    var city=document.getElementById("search-value").value


    console.log(city)
    weatherSearch(city)
})

function weatherSearch(city){
    var weatherUrl="http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8f0fa8364b82a56ff6b29b97a2963b6e"
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
})










}