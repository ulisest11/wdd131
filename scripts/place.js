// Function to calculate wind chill in Celsius
function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Function to update wind chill display
function updateWindChill() {
    const temperature = 25; // Static value for Petén in °C
    const windSpeed = 8;   // Static value in km/h

    const windChillElement = document.getElementById('wind-chill');

    // Check if conditions are met for wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Function to update footer with current year and last modified date
function updateFooter() {
    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Last modified date
    const lastModified = new Date(document.lastModified);
    document.getElementById('last-modified').textContent = `Last Modification: ${lastModified.toLocaleString()}`;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateWindChill();
    updateFooter();
});


  

