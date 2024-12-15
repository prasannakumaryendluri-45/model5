const apiKey = '3692c598ebb3641346f251e2e5b046f6'; // Replace with your OpenWeatherMap API key
const city = 'Paris'; // The city for which we want the weather (paris)

const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('weather-description');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');
const refreshButton = document.getElementById('refresh-btn');

// Function to fetch weather data
async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} & units=metric`; // Metric for Celsius

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Check if the response is valid
        if (data.cod === 200) {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Display weather data
            temperatureElement.textContent = `Temperature: ${temp}°C`;
            descriptionElement.textContent = `Weather: ${description}`;
            humidityElement.textContent = `Humidity: ${humidity}%`;
            windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`;
        } else {
            alert("Failed to fetch data.");
        }
    } catch (error) {
        alert("Error fetching weather data.");
    }
}

// Initial fetch
fetchWeather();

// Refresh weather data when button is clicked
refreshButton.addEventListener('click', fetchWeather);
