async function fetchSolarData() {
      const city = document.getElementById('city').value;
      const date = document.getElementById('date').value;
      const interval = document.getElementById('interval').value;
      const apiKey = '6c26c91cebbd4b10f3d53c34198fe949'; // Replace with your actual API key

      if (!city) {
        alert('Please enter a city name');
        return;
      }
      
      if (!date) {
        alert('Please select a date');
        return;
      }

      try {
        // Get city coordinates
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        if (!weatherResponse.ok) {
          document.getElementById('result').textContent = `Error: ${weatherData.message}`;
          return;
        }

        const { lat, lon } = weatherData.coord;

        // Fetch solar radiation data
        const solarUrl = `https://api.openweathermap.org/energy/1.0/solar/interval_data?lat=${lat}&lon=${lon}&date=${date}&interval=${interval}&appid=${apiKey}`;
        const solarResponse = await fetch(solarUrl);
        const solarData = await solarResponse.json();

        if (solarResponse.ok) {
          document.getElementById('result').innerHTML = `
            <h3>Solar Irradiance Data:</h3>
            <pre>${JSON.stringify(solarData, null, 2)}</pre>
          `;
        } else {
          document.getElementById('result').textContent = 'Error fetching solar irradiance data.';
        }
      } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
      }
    }