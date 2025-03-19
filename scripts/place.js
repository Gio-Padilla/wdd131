// In Celsius
const temperatureData = 10;
// In km/h
const windSpeedData = 5;

// Calculates windchill and will return "N/A" if it is not valid to calculate.
function calculateWindChill(temperature, windSpeed) {if (temperature > 10 || windSpeed <= 4.8) {return "N/A";} return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))).toFixed(1);}

// It makes sure the page has loaded before it runs the code
document.addEventListener("DOMContentLoaded", function () {

    
    const currentYear = new Date().getFullYear(); // Get the current year
    const lastModified = new Date(document.lastModified); // Get the last time the document was modified

    const temperatureElement = document.getElementById("temperature");
    const windSpeedElement = document.getElementById("wind-speed");
    const windChillElement = document.getElementById("wind-chill");

    temperatureElement.textContent = temperatureData;
    windSpeedElement.textContent = windSpeedData;
    windChillElement.textContent = calculateWindChill(temperatureData, windSpeedData);

    // Insert it into the HTML by ID
    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = lastModified;

});