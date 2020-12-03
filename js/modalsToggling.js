const toggleModal = () => {
    document.querySelector(".modalForWeather").classList.toggle("hideWeatherModal")
};

const toggleCodeModal = () => {
    document.querySelector(".modalForCodeQuiz").classList.toggle("hideCodeQuizModal")
};

const toggleLocalWireModal = () => {
    document.querySelector(".modalForLocalWire").classList.toggle("hideLocalWire")
};


$(".weatherBtn").on("click", toggleModal);
$(".modalWeatherCloseBtn").on("click", toggleModal);

$(".codeBtn").on("click", toggleCodeModal);
$(".modalCodeQuizCloseBtn").on("click" , toggleCodeModal);

$(".LocalWireBtn").on("click", toggleLocalWireModal);
$(".modalLocalWireCloseBtn").on("click", toggleLocalWireModal);

// document.querySelector(".weatherBtn").addEventListener("click", toggleModal);
// document.querySelector(".modalWeatherCloseBtn").addEventListener("click", toggleModal);