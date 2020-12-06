// Functions to show Modal
const toggleModal = () => {
    document.querySelector(".modalBackGroundForWeatherApp").classList.toggle("hideWeatherModal")
};

const toggleCodeModal = () => {
    document.querySelector(".modalBackGroundCodeQuiz").classList.toggle("hideCodeQuizModal")
};

const toggleLocalWireModal = () => {
    document.querySelector(".modalBackGroundLocalWire").classList.toggle("hideLocalWire")
};

// Functions to close modal background
const closeWeatherModalBackground = () => {
    document.querySelector(".modalBackGroundForWeatherApp").classList.toggle("hideWeatherModal")
};

const closeCodeQuizModalBackground = () => {
    document.querySelector(".modalBackGroundCodeQuiz").classList.toggle("hideCodeQuizModal")
};

const closeLocalWireModalBackground = () => {
    document.querySelector(".modalBackGroundLocalWire").classList.toggle("hideLocalWire")
}


//  Functions to close modal with the X button
$(".weatherBtn").on("click", toggleModal);
$(".modalWeatherCloseBtn").on("click", () => {
    toggle();
});

$(".codeBtn").on("click", toggleCodeModal);
$(".modalCodeQuizCloseBtn").on("click" , () => {
    toggle();
});

$(".LocalWireBtn").on("click", toggleLocalWireModal);
$(".modalLocalWireCloseBtn").on("click", () => {
    toggle();
});

// Closing the modal when clicking on the background
$(".modalBackGroundForWeatherApp").on("click", closeWeatherModalBackground);
$(".modalBackGroundCodeQuiz").on("click", closeCodeQuizModalBackground);
$(".modalBackGroundLocalWire").on("click", closeLocalWireModalBackground);
