// Get the current year
const currentYear = new Date().getFullYear();

// Get the last time the document was modified
let lastModified = new Date(document.lastModified);

// Insert it into the HTML by ID
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;

const menuToggle = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

document.addEventListener("DOMContentLoaded", function () {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        menuToggle.classList.toggle("show");
    });
});