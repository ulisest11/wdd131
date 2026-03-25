
// filtered-temples.js - VERSIÓN CORREGIDA

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
    button.textContent = navList.classList.contains('show') ? '✖' : '☰';
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Quetzaltenango Guatemala Temple",
        location: "Quetzaltenango",
        dedicated: "2009, March, 14",
        area: 21085,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/quetzaltenango-guatemala-temple/quetzaltenango-guatemala-temple-15696-main.jpg"
    },
    {
        templeName: "Guatemala City Guatemala Temple",
        location: "Guatemala City, Guatemala",
        dedicated: "1984, December, 14",
        area: 11610,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/guatemala-city-guatemala-temple/guatemala-city-guatemala-temple-6415-main.jpg"
    }
];

const container = document.getElementById("temples-container");
const mainTitle = document.querySelector("main > h1");

function getYear(temple) {
    return parseInt(temple.dedicated.trim().split(",")[0].trim());
}

function renderTemples(filteredTemples) {
    container.innerHTML = "";
    filteredTemples.forEach(t => {
        const card = document.createElement("figure");
        card.innerHTML = `
            <h2>${t.templeName}</h2>
            <p><strong>Location:</strong> ${t.location}</p>
            <p><strong>Dedicated:</strong> ${t.dedicated}</p>
            <p><strong>Size:</strong> ${t.area.toLocaleString()} sq ft</p>
            <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy" width="280" height="200">
        `;
        container.appendChild(card);
    });
}

renderTemples(temples);

// ✅ FIX: usar evento en el documento para capturar clicks en cualquier estado del nav
document.addEventListener("click", (event) => {
    const link = event.target.closest("nav a");
    if (!link) return;

    event.preventDefault();

    const filter = link.dataset.filter;
    let filtered = temples;

    switch (filter) {
        case "old":
            filtered = temples.filter(t => getYear(t) < 1900);
            break;
        case "new":
            filtered = temples.filter(t => getYear(t) > 2000);
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        case "home":
        default:
            filtered = temples;
            break;
    }

    // Cerrar menú mobile después de seleccionar
    navList.classList.remove('show');
    button.textContent = '☰';

    mainTitle.textContent = link.textContent;
    renderTemples(filtered);
});