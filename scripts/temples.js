
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




const button = document.getElementById('hamburger-btn');
const navList = document.querySelector('nav ul');

button.addEventListener('click', () => {
    navList.classList.toggle('show');

    if (navList.classList.contains('show')) {
        button.textContent = '✖';
    } else {
        button.textContent = '☰';
    }
});
