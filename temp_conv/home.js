function convertTemperature() {
    // Get user input
    var temperatureInput = document.getElementById("temperature").value;
    var unitInput = document.getElementById("unit").value;

    // Validate temperature input
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Convert temperature based on selected unit
    var convertedTemperature, resultUnit;
    if (unitInput === "celsius") {
        convertedTemperature = (parseFloat(temperatureInput) * 9 / 5) + 32;
        resultUnit = "°F";
    } else if (unitInput === "fahrenheit") {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5 / 9;
        resultUnit = "°C";
    } else if (unitInput === "kelvin") {
        convertedTemperature = parseFloat(temperatureInput) - 273.15;
        resultUnit = "°C";
    }

    // Display the result
    var result = document.getElementById("result");
    result.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + resultUnit;
}
