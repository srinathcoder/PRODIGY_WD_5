const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const temperature = document.querySelector('.temperature-value');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const apiKey = "f38f8c42b1af87210cc185b17b6c3070";
    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey};

    try {
        const response = await fetch(url);
        const weatherData = await response.json();

        if (weatherData.cod === '404') {
            location_not_found.style.display = 'block';
            weather_body.style.display = 'none';
        } else {
            location_not_found.style.display = 'none';
            weather_body.style.display = 'flex';

            temperature.innerHTML = ${Math.round(weatherData.main.temp - 273.15)}°C;
            description.innerHTML = ${weatherData.weather[0].description};
            humidity.innerHTML = ${weatherData.main.humidity}%;
            wind_speed.innerHTML = ${weatherData.wind.speed} Km/H;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});
