 const apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx'; 
        const city = 'Pune'; 

        // URLs for API calls
        const currentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

        async function fetchWeather() {
            try {
                // Fetch current weather
                const currentWeatherResponse = await fetch(currentWeatherApiUrl);
                const currentWeatherData = await currentWeatherResponse.json();
                displayCurrentWeather(currentWeatherData);

                // Fetch forecast weather
                const forecastResponse = await fetch(forecastApiUrl);
                const forecastData = await forecastResponse.json();
                displayForecast(forecastData);
            } catch (error) {
                console.error('Error fetching weather data:', error);
                document.getElementById('weather').innerHTML = `<p>Unable to retrieve weather data. Please try again later.</p>`;
            }
        }

        function displayCurrentWeather(data) {
            const weatherDiv = document.getElementById('weather');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            weatherDiv.innerHTML = `
                <h2>Current Weather in ${data.name}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Condition: ${description}</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
        }

        function displayForecast(data) {
            const forecastContainer = document.getElementById('forecast');
            forecastContainer.innerHTML = '';

            // Filter data to get daily forecasts at 12:00 PM
            const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"));

            dailyData.forEach(day => {
                const date = new Date(day.dt_txt).toLocaleDateString();
                const temp = day.main.temp;
                const description = day.weather[0].description;
                const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`;

                const dayDiv = document.createElement('div');
                dayDiv.classList.add('day');
                dayDiv.innerHTML = `
                    <h3>${date}</h3>
                    <img src="${icon}" alt="${description}">
                    <p>${temp}°C</p>
                    <p>${description}</p>
                `;
                forecastContainer.appendChild(dayDiv);
            });
        }

        // Automatically fetch weather data for Pune on page load
        fetchWeather();

        function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Converts 0 to 12 for 12-hour format
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${amPm}`;
    document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);

       
  