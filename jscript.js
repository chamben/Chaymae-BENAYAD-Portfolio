//Preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load",function(){
	preloader.classList.add("opacity-0");
	setTimeout(function(){
		preloader.style.display = "none";
	},1000);
})

//Navigate through the navbar anchor links

 const navbar = document.querySelector(".navbar");
 const navList = navbar.querySelectorAll("li");
 const navListSize = navList.length;
 const allSection = document.querySelectorAll(".section");
 const sectionSize = allSection.length;

 
 const showSection = function(elem){
 	for(let i=0; i<sectionSize; i++){
        allSection[i].classList.remove("active");
 	}
 	const target = elem.getAttribute("href").split("#")[1];
 	document.querySelector("#"+target).classList.add("active");
 }

 for(let i=0; i<navListSize; i++){
 	const link = navList[i].querySelector("a");
 	link.addEventListener("click",function(){

 		for(let i=0; i<sectionSize; i++){
        	allSection[i].classList.remove("back-section");
 		}

 		for(let j=0; j<navListSize; j++){
 			if(navList[j].querySelector("a").classList.contains("active")){
 				allSection[j].classList.add("back-section");
 			}
            navList[j].querySelector("a").classList.remove("active");
 		}
 		this.classList.add("active");
 		showSection(this);
 		if(window.innerWidth < 1200){
 			showSidebar();
 		}
 	})
 }

 //show sidebar using navbar-btn in responsive mode

 const navbarBtn = document.querySelector(".navbar-btn");
 const sidebar = document.querySelector(".sideBar");

 const showSidebar = function(){
 	sidebar.classList.toggle("show");
 	navbarBtn.classList.toggle("show");
 	for(let i=0; i<sectionSize; i++){
        	allSection[i].classList.toggle("show");
 		}
 }

 navbarBtn.addEventListener("click",showSidebar);
