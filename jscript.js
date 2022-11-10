//Elements
const preloader = document.querySelector(".preloader");
const navbar = document.querySelector(".navbar");
const navLink = navbar.querySelectorAll("a");
const allSections = document.querySelectorAll(".section");
const navbarBtn = document.querySelector(".navbar-btn");
const sidebar = document.querySelector(".sideBar");
const projectsContainer = document.querySelector("#project-container");

//Preloader
window.addEventListener("load", () => {
  preloader.classList.add("hidden");
  getAllprojectsData();
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

//get my projects data from my fake api
const getAllprojectsData = async function () {
  const response = await fetch(
    "https://chamben.github.io/projects-fake-api/projectsData.json"
  );
  const data = await response.json();
  console.log(data);
  const projectsData = data.map((project, index) => {
    return {
      id: index + 1,
      imgUrl: `images/projects/project-cover-${index + 1}.png`,
      title: project.title,
      description: project.description,
      demoUrl: project.demoUrl,
      githubUrl: project.githubUrl,
    };
  });
  displayProjects(projectsData);
};

// display projects data
const displayProjects = function (projects) {
  projects.map((project) => {
    const html = `
    <div class="project-item padding-15">
       <div class="project-item-content dark-shadow">
          <div class="project-img">
            <img src=${project.imgUrl} alt="project" />
          </div>
          <div class="project-info">
            <div class="demo-btns">
              <a target="_blank" href=${project.demoUrl}>
                <i class="fa fa-eye"></i>
              </a>
              <a target="_blank" href=${project.githubUrl}>
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div class="project-description">
            <span class="project-title">${project.title}&nbsp</span>${project.description}
          </div>
       </div>
      </div>
    `;
    projectsContainer.insertAdjacentHTML("beforeend", html);
  });
};
