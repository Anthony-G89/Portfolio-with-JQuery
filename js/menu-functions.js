const menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () =>{
    // console.log("clicked on")
    navbar.classList.toggle("change");
});