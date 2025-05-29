// Función para calcular el factor de sensación térmica (wind chill)
function calculateWindChill(temperature, windSpeed) {
    // Fórmula para métrica (temperatura en °C y velocidad del viento en km/h)
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}

// Función para actualizar el wind chill en la página
function updateWindChill() {
    const temperature = parseFloat(document.getElementById('temperature').textContent);
    const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);
    const windChillElement = document.getElementById('wind-chill');

    // Verificar condiciones para calcular wind chill (<=10°C y >4.8 km/h)
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// Actualizar el año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Actualizar la fecha de última modificación
document.getElementById('last-modified').textContent = `Last Modification: ${document.lastModified}`;

// Llamar a la función para actualizar el wind chill cuando la página cargue
document.addEventListener('DOMContentLoaded', updateWindChill);


  

