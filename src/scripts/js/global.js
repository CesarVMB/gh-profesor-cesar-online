// GET THE ACTIVE PAGE

const currentUrl = window.location.href;
const currentCategory = document.body.dataset.category;

// 🔹 Enlaces normales
document.querySelectorAll(".nav-item > a.nav-link").forEach((link) => {
  // Exact match
  if (link.href === currentUrl) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }

  // Categoría activa (cuando estamos en un post)
  if (currentCategory && link.href.includes(`/categoria/${currentCategory}`)) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

// 🔹 Dropdowns
document.querySelectorAll(".dropdown-menu > li > a").forEach((link) => {
  if (link.href === currentUrl) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }

  if (currentCategory && link.href.includes(`/categoria/${currentCategory}`)) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

// SHOW THE CURRENT YEAR

let jCurrentYear = document.getElementById("jCurrentYear");
jCurrentYear.innerText = new Date().getFullYear();
