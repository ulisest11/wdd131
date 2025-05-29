
function calculateWindChill(temperature, windSpeed) {
    
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}


function updateWindChill() {
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
    const windChillElement = document.getElementById('wind-chill');

    
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}


document.getElementById('year').textContent = new Date().getFullYear();


document.getElementById('last-modified').textContent = `Last Modification: ${document.lastModified}`;


document.addEventListener('DOMContentLoaded', updateWindChill);


  

