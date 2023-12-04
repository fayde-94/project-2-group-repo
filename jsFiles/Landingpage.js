$(document).ready(function(){
      $(".logo").slideUp(300).delay(800).fadeIn(400)
    });






// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = "1a5055afcd7a059f6e925945621b1035"; // Replace with your OpenWeatherMap API key
const city = "Calgary"; // Replace with your desired city

// Function to fetch weather data
async function getWeather(city) {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=51.0447&longitude=-114.079&current=temperature_2m");
      const weatherIcon = document.querySelector('.icon img');
      const temperature = document.querySelector('.temperature');
      const description = document.querySelector('.description');
// Function to update weather information
fetch(WEATHER_API)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconURL);
    temperature.textContent = `${data.main.temp}°C`;
    description.textContent = data.weather[0].description;
  })
  .catch(error => console.log(error));