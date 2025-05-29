// Calculate and display wind chill
function calculateWindChill(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))).toFixed(1);
}

// Display wind chill if conditions are met
function displayWindChill() {
    const temperature = 24; // Static value in °C
    const windSpeed = 8; // Static value in km/h
    const windChillElement = document.getElementById('wind-chill');

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById('last-updated').textContent = document.lastModified;

// Initialize wind chill display when page loads
window.addEventListener('load', displayWindChill);


  

