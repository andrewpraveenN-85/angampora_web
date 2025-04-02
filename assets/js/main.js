document.addEventListener("DOMContentLoaded", () => {
  // Function to load HTML content into a given element
  const loadHTML = (elementId, filePath) => {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById(elementId).innerHTML = data;

        // Initialize navbar functionality AFTER the navbar has been loaded
        if (elementId === "navbar") {
          initNavbar();
        }
      })
      .catch((error) => console.error(`Error loading ${filePath}:`, error));
  };

  // Load navbar and footer
  loadHTML("navbar", "assets/partials/navbar.html");
  loadHTML("footer", "assets/partials/footer.html");
});

// Function to initialize navbar functionality
function initNavbar() {
  const navbar = document.getElementById("navbar").querySelector("nav");
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  // Check if we're on the contact page
  const isContactPage = document.body.classList.contains("page-contact");

  // If on contact page, add black background immediately
  if (isContactPage) {
    navbar.classList.add("bg-black", "bg-opacity-80");
  }

  // Toggle mobile menu
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Add background on scroll
  window.addEventListener("scroll", () => {
    // If scrolled more than 50px from top, add black background
    if (window.scrollY > 50) {
      navbar.classList.add("bg-black", "bg-opacity-80");
    } else if (!isContactPage) {
      // Remove background when at top, but only if NOT on contact page
      navbar.classList.remove("bg-black", "bg-opacity-80");
    }
    // On contact page, we keep the background regardless of scroll position
  });
}
