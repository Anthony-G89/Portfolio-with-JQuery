topBtn = $(".topBtn");

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