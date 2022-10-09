//Elements
const preloader = document.querySelector(".preloader");
const navbar = document.querySelector(".navbar");
const navLink = navbar.querySelectorAll("a");
const allSections = document.querySelectorAll(".section");
const navbarBtn = document.querySelector(".navbar-btn");
const sidebar = document.querySelector(".sideBar");

//Preloader
window.addEventListener("load", () => {
  preloader.classList.add("hidden");
});

//Navigate through the navbar anchor links
const showSection = function (navLink) {
  allSections.forEach((section) => {
    section.classList.remove("back-section");
    if (section.classList.contains("active")) {
      section.classList.add("back-section");
    }
    section.classList.remove("active");
  });
  const id = navLink.getAttribute("href");
  const section = document.querySelector(id);
  section.classList.add("active");
};

navbar.addEventListener("click", function (e) {
  const clickedLink = e.target.closest("a");
  //activate clicked navbar link
  navLink.forEach((link) => link.classList.remove("active"));
  clickedLink.classList.add("active");

  //show section of clicked navbar link
  showSection(clickedLink);

  //remove sidebar in responsive mode
  if (sidebar.classList.contains("show")) {
    showSidebar();
  }
});

//show sidebar using navbar-btn in responsive mode
const showSidebar = function () {
  sidebar.classList.toggle("show");
  navbarBtn.classList.toggle("show");
};

navbarBtn.addEventListener("click", showSidebar);
