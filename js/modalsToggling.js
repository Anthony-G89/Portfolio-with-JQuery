var modal = document.querySelector(".modalsBackGround");

const modalNoteTaker = document.querySelector("#modalforNoteTaker");
const btnToOpenNoteTaker = document.querySelector(".btnforNoteTaker");
const closeModalBtn = document.querySelector(".closeBtnforNoteTaker");


// open
function openModal() {
    modalNoteTaker.style.display = "block";
};

// close
function closeModal() {
    modalNoteTaker.style.display = "none";
};

function oustSideClick(e) {
    if(e.target == modalNoteTaker) {
        modalNoteTaker.style.display = "none";
    }
}

// Events
btnToOpenNoteTaker.addEventListener("click",openModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", oustSideClick);







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

var togglePasswordGeneratorModal = () => {
    document.querySelector(".modalsBackGround").classList.toggle("hideModals");
}

// Functions to close modal background
const closeWeatherModalBackground = () => {
    document.querySelector(".modalBackGroundForWeatherApp").classList.toggle("hideWeatherModal")
};

const closeCodeQuizModalBackground = () => {
    document.querySelector(".modalBackGroundCodeQuiz").classList.toggle("hideCodeQuizModal")
};

const closeLocalWireModalBackground = () => {
    document.querySelector(".modalBackGroundLocalWire").classList.toggle("hideLocalWire")
};

const closePasswordGenerator = () => {
    document.querySelector(".modalsBackGround").classList.toggle("hideModals")
}


//  Functions to close modal with the X button
$(".weatherBtn").on("click", toggleModal);
$(".modalWeatherCloseBtn").on("click", () => {
    toggle();
});

$(".codeBtn").on("click", toggleCodeModal);
$(".modalCodeQuizCloseBtn").on("click", () => {
    toggle();
});

$(".LocalWireBtn").on("click", toggleLocalWireModal);
$(".modalLocalWireCloseBtn").on("click", () => {
    toggle();
});

$(".btnforPasswordG").on("click", togglePasswordGeneratorModal);
$(".closeBtnForPasswordGenerator").on("click", () => {
    toggle();
});


// Closing the modal when clicking on the background
$(".modalBackGroundForWeatherApp").on("click", closeWeatherModalBackground);
$(".modalBackGroundCodeQuiz").on("click", closeCodeQuizModalBackground);
$(".modalBackGroundLocalWire").on("click", closeLocalWireModalBackground);
$(".modalsBackGround").on("click", closePasswordGenerator);
