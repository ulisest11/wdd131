
const currentYear = new Date().getFullYear();


const copyrightPara = document.querySelector("footer p");


if (copyrightPara) {
    copyrightPara.innerHTML = `©${currentYear} 🌵 Ulises Antonio Tzaj 🌵 Guatemala`;
}

const lastModified = document.lastModified;


const lastUpdatedSpan = document.getElementById("last-updated");

if (lastUpdatedSpan) {
    lastUpdatedSpan.textContent = lastModified;
}

const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

window.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("product");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
});
  