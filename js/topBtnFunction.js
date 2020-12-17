topBtn = $(".topBtn");
const testingBtn = document.querySelector(".testingBtn");


// Function for Message box appearing

// function handleClickedOn() {
//     message.classList.add("success");
//     setTimeout(function(){
//         $("#message").fadeOut("slow");
//     },2000)
// };

// testingBtn.addEventListener("click", handleClickedOn);



// Testing to see how many pixles am I scrolling
window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    // console.log(scrolled);
});


// Triggering button to appear when reaching a certain amount of pixels
window.addEventListener("scroll", ()=> {
    const scrolled = document.querySelector(".topBtn");
    scrolled.classList.toggle("active", window.scrollY > 1899)
});

// When clicked on button will automatically scroll to the top of the page
topBtn.on("click", () => {
    $("html, body").animate({scrollTop: 0}, "slow")
});