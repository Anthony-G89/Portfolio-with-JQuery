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
$(".modalWeatherCloseBtn").on("click", toggleModal);

$(".codeBtn").on("click", toggleCodeModal);
$(".modalCodeQuizCloseBtn").on("click" , toggleCodeModal);

$(".LocalWireBtn").on("click", toggleLocalWireModal);
$(".modalLocalWireCloseBtn").on("click", toggleLocalWireModal);

// toggling modal background
$(".modalBackGroundForWeatherApp").on("click", closeWeatherModalBackground);
$(".modalBackGroundCodeQuiz").on("click", closeCodeQuizModalBackground);
$(".modalBackGroundLocalWire").on("click", closeLocalWireModalBackground);
