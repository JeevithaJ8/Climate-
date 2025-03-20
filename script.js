const API_KEY = "your_openweather_api_key"; // Replace with your actual API key

function fetchClimateData() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayClimateData(data);
            } else {
                document.getElementById("climateResult").innerHTML = `<p style="color:red;">City not found!</p>`;
            }
        })
        .catch(error => console.error("Error fetching data:", error));
}

function displayClimateData(data) {
    const climateBox = document.getElementById("climateResult");
    climateBox.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        <p><strong>Condition:</strong> ${data.weather[0].description}</p>
    `;
        }
