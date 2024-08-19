const API_KEY = 'c89aeb1776ae5382c4d0fb13fa09f6ac';  // Replace with your actual API key
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const humidity = document.getElementById('humidity');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        getWeatherData(location);
    } else {
        alert('Please enter a city name.');
    }
});

const getWeatherData = (location) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => alert('Could not fetch weather data. Please try again.'));
};

const displayWeatherData = (data) => {
    if (data.cod === '404') {
        alert('City not found. Please enter a valid city.');
        return;
    }

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    weatherCondition.textContent = `Condition: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    weatherInfo.style.display = 'block';
};
