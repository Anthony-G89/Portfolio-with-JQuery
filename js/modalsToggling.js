const toggleModal = () => {
    document.querySelector(".modalForWeather").classList.toggle("hideWeatherModal")
};


$(".weatherBtn").on("click", toggleModal);
$(".modalWeatherCloseBtn").on("click", toggleModal);

// document.querySelector(".weatherBtn").addEventListener("click", toggleModal);
// document.querySelector(".modalWeatherCloseBtn").addEventListener("click", toggleModal);