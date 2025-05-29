// Datos fijos
const temp = 30; // °C
const wind = 6;  // km/h

function calculateWindChill(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

// Mostrar windchill si aplica
const windChillElement = document.getElementById("windchill");
if (temp <= 10 && wind > 4.8) {
    const chill = calculateWindChill(temp, wind);
    windChillElement.textContent = chill.toFixed(1) + " °C";
} else {
    windChillElement.textContent = "N/A";
}

// Fecha actual y de modificación
document.getElementById("last-updated").textContent = new Date(document.lastModified).toLocaleString();

  

