const menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const body = document.querySelector(".body");
const navList =document.querySelector(".nav-list");

menu.addEventListener("click", () =>{
    // console.log("clicked on")
    navbar.classList.toggle("change");
});

navList.addEventListener('click', () =>{
        navbar.classList.toggle("change");
});

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