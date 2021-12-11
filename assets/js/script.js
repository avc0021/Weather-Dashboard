//variables for project
var search = document.getElementById (search)

//call web api
var getCurrentWeather = function() {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=d310cdc3e7de424fc0047cf1fd72fd27");
    console.log("function called!")
};

getCurrentWeather();

//parse info/ pull only info needed

//click austin button and displays weather and 5 day forcast

//click chicago button and displays weather and 5 day forcast

//click new york button and displays weather and 5 day forcast

//click las vegas button and displays weather and 5 day forcast

//click button and displays weather and 5 day forcast for city requested