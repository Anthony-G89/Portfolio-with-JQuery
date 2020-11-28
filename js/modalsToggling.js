const toggleModal = () => {
    document.querySelector(".modalForWeather").classList.toggle("hideWeatherModal")
};

const toggleCodeModal = () => {
    document.querySelector(".modalForCodeQuiz").classList.toggle("hideCodeQuizModal")


};


$(".weatherBtn").on("click", toggleModal);
$(".modalWeatherCloseBtn").on("click", toggleModal);

$(".codeBtn").on("click", toggleCodeModal);
$(".modalCodeQuizCloseBtn").on("click" , toggleCodeModal);

// document.querySelector(".weatherBtn").addEventListener("click", toggleModal);
// document.querySelector(".modalWeatherCloseBtn").addEventListener("click", toggleModal);