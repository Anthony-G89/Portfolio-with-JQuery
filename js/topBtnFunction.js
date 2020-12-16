topBtn = $(".topBtn");

const message = document.querySelector("#message");
const testingBtn = document.querySelector(".testingBtn");

let shouldNavigateAway = false;


// testingBtn.on("click", () => {
//     console.log("u clicked on me buddy");
// })

function handleClickedOn() {
    // e.prevent.default();
    message.classList.add("success");
}

function endAnimation() {
    message.removeAttribute("class")
    if(shouldNavigateAway) {
        location.href = "/index.html";
    }
}


// function handleAnimation() {
//     testingBtn.removeAttribute("class")
// };

testingBtn.addEventListener("click", handleClickedOn);
message.addEventListener("animationend", endAnimation);

// Testing to see how many pixles am I scrolling
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    // console.log(scrolled);
});


// triggering button to appear when reaching a certain amount of pixels
window.addEventListener("scroll", ()=> {
    const scrolled = document.querySelector(".topBtn");
    scrolled.classList.toggle("active", window.scrollY > 1899)
});

// when clicked on button will automatically scroll to the top of the page
topBtn.on("click", () => {
    $("html, body").animate({scrollTop: 0}, "slow")
});