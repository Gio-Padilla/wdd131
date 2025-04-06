// Get the current year
const currentYear = new Date().getFullYear();

// Get the last time the document was modified
let lastModified = new Date(document.lastModified);

// Insert it into the HTML by ID
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;

const formOptions = document.getElementById("f-select");

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];

appendListToFormOptions(products);

function appendListToFormOptions(optionsList) {
  	optionsList.forEach(product => {
      	const option = document.createElement("option");
      	option.id = product.id;
      	option.name = product.name;
      	option.textContent = toTitleCase(product.name);
      	formOptions.append(option);
  	});
}

function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Check if the review counter exists in localStorage, if not, initialize it
if (!localStorage.getItem("reviewCounter")) {
    localStorage.setItem("reviewCounter", 0);
}

// Function to update the review count display
function updateReviewCount() {
    let reviewCounter = parseInt(localStorage.getItem("reviewCounter"));
    document.getElementById("reviewCount").textContent = `Reviews Completed: ${reviewCounter}`;
}

// Handle form submission
const reviewForm = document.getElementById("review");
reviewForm.addEventListener("submit", function (event) {
    // Increment review count in localStorage
    let reviewCounter = parseInt(localStorage.getItem("reviewCounter"));
    reviewCounter += 1;
    
    // Store the updated review count
    localStorage.setItem("reviewCounter", reviewCounter);
    
    // Update the review count displayed on the page
    updateReviewCount();
});
  
// Update the review count when the page is loaded
updateReviewCount();