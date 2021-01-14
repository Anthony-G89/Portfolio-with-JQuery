const menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const body = document.querySelector(".body");
// const navLink =document.querySelector(".nav-link");

menu.addEventListener("click", () =>{
    // console.log("clicked on")
    navbar.classList.toggle("change");
});

// navLink.addEventListener('click', () =>{
//         navbar.style.display = "hidden" 
// });

// body.addEventListener('click', () => {
//     navbar.style.display = "";
//     // console.log("? on");
// })


// function outSideClick (e) {
//     if(e.target == body) {
//         navbar.style.display = "none"
//     }
// }

// window.addEventListener("click", outSideClick)