//variables for project
var austin = document.getElementById('austin')
var chicago = document.getElementById('chicago')
var newYork = document.getElementById('new-york')
var lasVegas = document.getElementById('las-vegas')
var sa = "https://api.openweathermap.org/data/2.5/onecall?lat=29.42&lon=-98.49&appid=7860cffc7f19757620d3827d0f41eb5b";
var austin= "https://api.openweathermap.org/data/2.5/onecall?lat=30.26&lon=-97.73&appid=7860cffc7f19757620d3827d0f41eb5b";
var chicago= "https://api.openweathermap.org/data/2.5/onecall?lat=41.88&lon=-87.62&appid=7860cffc7f19757620d3827d0f41eb5b";
var ny= "https://api.openweathermap.org/data/2.5/onecall?lat=40.73&lon=-73.93&appid=7860cffc7f19757620d3827d0f41eb5b";
var vegas = "https://api.openweathermap.org/data/2.5/onecall?lat=36.11&lon=-115.17&appid=7860cffc7f19757620d3827d0f41eb5b";


//call web api display current location details and todays day

var getCurrent = function() { 
    fetch(sa).then(function(response) {
        
        if (response.ok) {
          response.json().then(function(data) {
            console.log(weather);
          });
        } else {
          alert("Error");
        }
      });
    document.getElementById("page-start").textContent = "";

    console.log("getCurrent");


}
getCurrent();
    




    

//click austin button and displays weather and 5 day forcast
function getAustin() {
    var requestAustin= 
    
    console.log (getAustin)
    fetch(requestAustin)
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    
    
};


//click chicago button and displays weather and 5 day forcast
var getChicagoWeather = function(Chicago) {
    
    console.log("function called chicago!")
    
};


//click new york button and displays weather and 5 day forcast
var getNewYorkWeather = function(NewYork) {
    
    console.log("function called new york!")
};


//click las vegas button and displays weather and 5 day forcast
var getVegasWeather = function(Vegas) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=36.11&lon=-115.17&appid=7860cffc7f19757620d3827d0f41eb5b");
    console.log("vegas!")
};


//click button and displays weather and 5 day forcast for city requested
chicago.addEventListener('click', chicago);