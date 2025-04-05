// Get the current year
const currentYear = new Date().getFullYear();

// Get the last time the document was modified
let lastModified = new Date(document.lastModified);

// Insert it into the HTML by ID
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;

// Check if the review counter exists in localStorage, if not, initialize it
if (!localStorage.getItem("reviewCounter")) {
    localStorage.setItem("reviewCounter", 0);
}

// Function to update the review count display
function updateReviewCount() {
    let reviewCounter = parseInt(localStorage.getItem("reviewCounter"));
    document.getElementById("reviewCount").textContent = `Reviews Completed: ${reviewCounter}`;
}

// Update the review count when the page is loaded
updateReviewCount();