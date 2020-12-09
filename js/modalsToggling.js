const modalPasswordGenerator = document.querySelector("#modalForPasswordGenerator");
const btnToOpenPasswordGenerator = document.querySelector(".btnforPasswordG");
const btnToClosePasswordGenerator = document.querySelector(".closeBtnForPasswordGenerator");

const modalNoteTaker = document.querySelector("#modalforNoteTaker");
const btnToOpenNoteTaker = document.querySelector(".btnforNoteTaker");
const closeModalBtn = document.querySelector(".closeBtnforNoteTaker");

const modalEmployeeD = document.querySelector("#modalforEmployeeD");
const btnToOpenEmployeeD = document.querySelector(".btnForEmployeeD");
const btnToCloseEmplyoeeD = document.querySelector(".closeBtnforEmployeeD");

const modalEatDaBurger = document.querySelector("#modalforEatDaBurger");
const btnToOpenEatDaBurger = document.querySelector(".btnForEatDaBurger");
const btnToCloseEatDaBurger = document.querySelector(".closeBtnforEatDaBurger");

const modalFitnessTracker = document.querySelector("#modalforFitnessTracker");
const btnToOpenFitnessTracker = document.querySelector(".btnForFitnessTracker");
const btnToCloseFitnessTracker = document.querySelector(".closeBtnforFitnessTracker");





// open modal
function openModal() {
    modalNoteTaker.style.display = "block";
};
function openModaltoPasswordG() {
    modalPasswordGenerator.style.display = "block";
};
function openModalToEmplyoeeD() {
    modalEmployeeD.style.display = "block";
};
function openModalToEatDaBurger() {
    modalEatDaBurger.style.display = "block";
};
function openModalToFitnessTracker() {
    modalFitnessTracker.style.display = "block";
};

// close modal
function closeModal() {
    modalNoteTaker.style.display = "none";
};
function closeModaltoPasswordG() {
    modalPasswordGenerator.style.display = "none";
};
function closeModalToEmployeeD() {
    modalEmployeeD.style.display = "none";
};
function closeModalToEatDaBurger() {
    modalEatDaBurger.style.display = "none";
};
function closeModalToFitnessTracker() {
    modalFitnessTracker.style.display = "none";
};

// Clicking outside the modal to close it
function oustSideClick(e) {
    if(e.target == modalNoteTaker) {
        modalNoteTaker.style.display = "none";
    }
};
function oustSideClickForPasswordG(e) {
    if(e.target == modalPasswordGenerator) {
        modalPasswordGenerator.style.display = "none";
    }
};
function oustSideClickForEmplyoeeD(e) {
    if(e.target == modalEmployeeD) {
        modalEmployeeD.style.display = "none";
    }
};
function oustSideClickForEatDaBurger(e) {
    if(e.target == modalEatDaBurger) {
        modalEatDaBurger.style.display = "none";
    }
};
function oustSideClickForFitnessTracker(e) {
    if(e.target == modalFitnessTracker) {
        modalFitnessTracker.style.display = "none";
    }
};

// Events
btnToOpenNoteTaker.addEventListener("click",openModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", oustSideClick);

btnToOpenPasswordGenerator.addEventListener("click", openModaltoPasswordG);
btnToClosePasswordGenerator.addEventListener("click", closeModaltoPasswordG);
window.addEventListener("click", oustSideClickForPasswordG);

btnToOpenEmployeeD.addEventListener("click", openModalToEmplyoeeD);
btnToCloseEmplyoeeD.addEventListener("click", closeModalToEmployeeD);
window.addEventListener("click", oustSideClickForEmplyoeeD);

btnToOpenEatDaBurger.addEventListener("click", openModalToEatDaBurger);
btnToCloseEatDaBurger.addEventListener("click", closeModalToEatDaBurger);
window.addEventListener("click", oustSideClickForEatDaBurger);

btnToOpenFitnessTracker.addEventListener("click", openModalToFitnessTracker);
btnToCloseFitnessTracker.addEventListener("click", closeModalToFitnessTracker);
window.addEventListener("click", oustSideClickForFitnessTracker);









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
};


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



// Closing the modal when clicking on the background
$(".modalBackGroundForWeatherApp").on("click", closeWeatherModalBackground);
$(".modalBackGroundCodeQuiz").on("click", closeCodeQuizModalBackground);
$(".modalBackGroundLocalWire").on("click", closeLocalWireModalBackground);

