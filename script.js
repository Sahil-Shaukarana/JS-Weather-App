


const form= document.querySelector('form')
const searchfield= document.querySelector('.searchField')
console.log(searchfield);
 
const tempratureField = document.querySelector(".temp");
const cityField = document.querySelector(".time_location p");
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather-icon img");
const weatherField = document.querySelector(".weather_condition span");

const  feelsLikeData=document.querySelector(".value");
const humidityData= document.querySelector(".value.humidity")
const windData= document.querySelector(".value.wind")
const visibilityData= document.querySelector(".value.visibility");
const uvData= document.querySelector(".value.uv");
const pressureData= document.querySelector(".value.pressure");
let target= 'Mumbai';

// const process= require('process')




form.addEventListener("submit", search)

function search(e){
  e.preventDefault();
  console.log("form submitted");
  target=   searchfield.value; 
  console.log(target);
  fetchdata(target)


} 
//process
// Process.env.key  

async function fetchdata(target)
{
  const endpoint=`http://api.weatherapi.com/v1/current.json?key=a79aa4d75d784370868152422251409&q=${target}&aqi=no`

  console.log(endpoint)

  //fetch method
const response= await fetch(endpoint)

console.log(response)
const data=await response.json();
console.log(data)

let curTemp= data.current.temp_c;
console.log(curTemp);
let cityname= data.location.name;
console.log(cityname);
let localtime= data.location.localtime;
console.log(localtime);
let condition= data.current.condition.text;
console.log(condition);
let conditionIcons= data.current.condition.icon;
console.log(conditionIcons);

console.log(curTemp, cityname,localtime, condition,conditionIcons ); //another way to write console.log statment for multiple logs

let feelslike= data.current.feelslike_c;
let humidity= data.current.humidity;
console.log("humidity "+ humidity);

let wind= data.current.wind_kph;
let visibility= data.current.vis_km;
let pressure= data.current.pressure_mb;

let uv= data.current.uv;
updateData(curTemp, cityname,localtime, condition,conditionIcons, feelslike , humidity, wind, visibility, uv, pressure);

}



// function update
function updateData(curTemp,cityname,localtime,condition,conditionIcons, feelslike, humidity,wind, visibility, uv, pressure)
{
  
 

  tempratureField.innerText=curTemp;
  weatherField.innerText=condition;
  dateField.innerText=localtime;
  cityField.innerText=cityname;
  emojiField.src=conditionIcons;
  feelsLikeData.innerText= feelslike;
  humidityData.innerText= humidity+"%";

   windData.innerText= wind+" Km/h";


    visibilityData.innerText= visibility+" Km";
        pressureData.innerText= pressure+" hPa";
  searchfield.value=" ";

uvData.innerText= uv;

}

