const toggleModal = () => {
    document.querySelector(".modalForWeather")
    .classList.toggle("hideWeatherModal")
};

document.querySelector(".weatherBtn").addEventListener("click", toggleModal);
document.querySelector(".modalWeatherCloseBtn").addEventListener("click", toggleModal);