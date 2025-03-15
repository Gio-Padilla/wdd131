const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

document.addEventListener("DOMContentLoaded", function () {
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("show");
        menuToggle.classList.toggle("show");

        // Toggle between ☰ (hamburger) and ✖ (close) icon
        if (navMenu.classList.contains("show")) {
            menuToggle.textContent = "✖";
        } else {
            menuToggle.textContent = "☰";
        }
    });
});