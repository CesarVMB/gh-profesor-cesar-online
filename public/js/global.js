// GET THE ACTIVE PAGE
document.querySelectorAll(".nav-item > a.nav-link").forEach(link=>{if(link.href===window.location.href){console.log(link.href);link.classList.add("active");link.setAttribute("aria-current","page")}});document.querySelectorAll(".dropdown-menu > li > a").forEach(link=>{if(link.href===window.location.href){console.log(link.href);link.classList.add("active");link.setAttribute("aria-current","page")}});// SHOW THE CURRENT YEAR
let jCurrentYear=document.getElementById("jCurrentYear");jCurrentYear.innerText=new Date().getFullYear();
