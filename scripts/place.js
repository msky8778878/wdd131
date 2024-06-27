const temperatureLabel = document.querySelector("#temperature-label");
const conditonsLabel = document.querySelector("#conditons-label");
const windLabel = document.querySelector("#wind-label");
const windchillLabel = document.querySelector("#windchill-label");

var temperature = 10.0;
var conditions = "Partly Cloudy";
var wind = 5.0;
var windChill = "N/A";

function calculateWindChill(temperature, wind) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16);
}

if ((temperature <= 10) && (wind > 4.8)) {
    windChill = String(calculateWindChill(temperature, wind).toFixed(2));
    windChill = windChill.concat(" °C")
}

temperatureLabel.innerHTML = `${temperature} °C`;
conditonsLabel.innerHTML = `${conditions}`;
windLabel.innerHTML = `${wind} km/h`;
windchillLabel.innerHTML = `${windChill}`;
