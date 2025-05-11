
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
