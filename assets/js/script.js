//variables for project
var search = document.getElementById (search)

//call web api display current location details and todays day
var getSaWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=29.42&lon=-99.49&appid=d310cdc3e7de424fc0047cf1fd72fd27");
    console.log("function called SA!")
};

getSaWeather();

//parse info/ pull only info needed

//click austin button and displays weather and 5 day forcast
var getAustinWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=30.26&lon=-97.73&appid=d310cdc3e7de424fc0047cf1fd72fd27");
    console.log("function called austin!")
};
getAustinWeather();

//click chicago button and displays weather and 5 day forcast
var getChicagoWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=41.88&lon=-87.62&appid=d310cdc3e7de424fc0047cf1fd72fd27");
    console.log("function called chicago!")
};
getChicagoWeather();

//click new york button and displays weather and 5 day forcast
var getNewYorkWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=40.73&lon=-73.93&appid=d310cdc3e7de424fc0047cf1fd72fd27");
    console.log("function called new york!")
};
getNewYorkWeather();

//click las vegas button and displays weather and 5 day forcast
var getVegasWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=36.11&lon=-115.17&appid=d310cdc3e7de424fc0047cf1fd72fd27");
    console.log("vegas!")
};
getVegasWeather();

//click button and displays weather and 5 day forcast for city requested