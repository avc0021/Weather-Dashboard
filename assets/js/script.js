//variables for project
var austin = document.getElementById('austin')
var chicago = document.getElementById('chicago')
var newYork = document.getElementById('new-york')
var lasVegas = document.getElementById('las-vegas')
var sa = "https://api.openweathermap.org/data/2.5/onecall?lat=29.42&lon=-98.49&exclude=hourly,daily&appid=7860cffc7f19757620d3827d0f41eb5b";
var austin= "https://api.openweathermap.org/data/2.5/onecall?lat=30.26&lon=-97.73&exclude=hourly,daily&appid=7860cffc7f19757620d3827d0f41eb5b";
var chicago= "https://api.openweathermap.org/data/2.5/onecall?lat=41.88&lon=-87.62&exclude=hourly,daily&appid=7860cffc7f19757620d3827d0f41eb5b";
var ny= "https://api.openweathermap.org/data/2.5/onecall?lat=40.73&lon=-73.93&exclude=hourly,daily&appid=7860cffc7f19757620d3827d0f41eb5b";
var vegas = "https://api.openweathermap.org/data/2.5/onecall?lat=36.11&lon=-115.17&exclude=hourly,daily&appid=7860cffc7f19757620d3827d0f41eb5b";


//call web api display current location details and todays day

var hailMary = function() {
  fetch(vegas)
  .then(response);
  const data = response.json();
  console.log(data);
  const { current } = data;

  document.getElementById("page-start").appendChild = city;
}
hailMary();


//     var node = document.createElement("li");
//     var textNode = document.createTextNode("water");
//     node.appendChild(textNode);
//     document.getElementById("page-start").appendChild(node);
// }



    // fetch(vegas)
    // .then(function (response) {
    //   return response.json();
    // })
    // .then(function (data) {
    //   appendData(data);
    // })
    // .catch(function (err) {
    //   console.log(err);
    // });
    // function appendData(data) {
    //   var mainContainer = document.getElementById("page-start");
    //   mainContainer.appendChild("page-start");
    // };






    

//click austin button and displays weather and 5 day forcast
//function getAustin() {
    //var requestAustin= 
    
    //console.log (getAustin)
    //fetch(requestAustin)
    //.then(function(response) {
        //console.log(response);
        //return response.json();
    //})
    
    
//};


//click chicago button and displays weather and 5 day forcast
//var getChicagoWeather = function(Chicago) {
    //console.log("function called chicago!")
    
//};


//click new york button and displays weather and 5 day forcast
//var getNewYorkWeather = function(NewYork) {
    ///console.log("function called new york!")
//};


//click las vegas button and displays weather and 5 day forcast
//var getVegasWeather = function(Vegas) {
    //console.log("vegas!")
//};


//click button and displays weather and 5 day forcast for city requested
