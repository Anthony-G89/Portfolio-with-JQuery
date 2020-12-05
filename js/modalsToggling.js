const toggleModal = () => {
    document.querySelector(".modalBackGroundForWeatherApp").classList.toggle("hideWeatherModal")
};

const toggleCodeModal = () => {
    document.querySelector(".modalBackGroundCodeQuiz").classList.toggle("hideCodeQuizModal")
};

const toggleLocalWireModal = () => {
    document.querySelector(".modalBackGroundLocalWire").classList.toggle("hideLocalWire")
};


$(".weatherBtn").on("click", toggleModal);
$(".modalWeatherCloseBtn").on("click", toggleModal);

$(".codeBtn").on("click", toggleCodeModal);
$(".modalCodeQuizCloseBtn").on("click" , toggleCodeModal);

$(".LocalWireBtn").on("click", toggleLocalWireModal);
$(".modalLocalWireCloseBtn").on("click", toggleLocalWireModal);

// document.querySelector(".weatherBtn").addEventListener("click", toggleModal);
// document.querySelector(".modalWeatherCloseBtn").addEventListener("click", toggleModal);