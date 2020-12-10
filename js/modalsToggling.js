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

const modalWeatherDashbored = document.querySelector("#modalForWeatherDashbored");
const btnToOpenWeatherDashBored = document.querySelector(".weatherBtn");
const btnToCloseWeatherDashBored = document.querySelector(".closeBtnforWeatherDashBored");

const modalCodeQuiz = document.querySelector("#modalForCodeQuiz");
const btnToOpenCodeQuiz = document.querySelector(".codeBtn");
const btnToCloseCodeQuiz = document.querySelector(".modalCodeQuizCloseBtn");

const modalLocalWire = document.querySelector("#modalForLocalWire");
const btnToOpenLocalWire = document.querySelector(".LocalWireBtn");
const btnToCloseLocalWire = document.querySelector(".modalLocalWireCloseBtn");





// opening modals
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
function openModalToWeatherDashBored() {
    modalWeatherDashbored.style.display = "block";
}
function openModalToCodeQuiz() {
    modalCodeQuiz.style.display = "block";
}
function openModalToLocalWire() {
    modalLocalWire.style.display = "block";
}

// closing modals
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
function closeModalToWeatherDashBored() {
    modalWeatherDashbored.style.display = "none";
}
function closeModalToCodeQuiz() {
    modalCodeQuiz.style.display = "none";
}
function closeModalToLocalWire() {
    modalLocalWire.style.display = "none";
}

// Clicking outside the modal to close app's
function outSideClick(e) {
    if(e.target == modalNoteTaker) {
        modalNoteTaker.style.display = "none";
        console.log("you clicked on me!");
    }
};
function outSideClickForPasswordG(e) {
    if(e.target == modalPasswordGenerator) {
        modalPasswordGenerator.style.display = "none";
    }
};
function outSideClickForEmplyoeeD(e) {
    if(e.target == modalEmployeeD) {
        modalEmployeeD.style.display = "none";
    }
};
function outSideClickForEatDaBurger(e) {
    if(e.target == modalEatDaBurger) {
        modalEatDaBurger.style.display = "none";
    }
};
function outSideClickForFitnessTracker(e) {
    if(e.target == modalFitnessTracker) {
        modalFitnessTracker.style.display = "none";
    }
};
function outSideClickForWeatherDashBored(e){
    if(e.target == modalWeatherDashbored) {
        modalWeatherDashbored.style.display = "none";
    }
};
function outSideClickForCodeQuiz(e){
    if(e.target == modalCodeQuiz) {
        modalCodeQuiz.style.display = "none";
    }
};
function outSideClickForLocalWire(e){
    if(e.target == modalLocalWire) {
        modalLocalWire.style.display = "none";
    }
};

// Events
btnToOpenNoteTaker.addEventListener("click",openModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", outSideClick);

btnToOpenPasswordGenerator.addEventListener("click", openModaltoPasswordG);
btnToClosePasswordGenerator.addEventListener("click", closeModaltoPasswordG);
window.addEventListener("click", outSideClickForPasswordG);

btnToOpenEmployeeD.addEventListener("click", openModalToEmplyoeeD);
btnToCloseEmplyoeeD.addEventListener("click", closeModalToEmployeeD);
window.addEventListener("click", outSideClickForEmplyoeeD);

btnToOpenEatDaBurger.addEventListener("click", openModalToEatDaBurger);
btnToCloseEatDaBurger.addEventListener("click", closeModalToEatDaBurger);
window.addEventListener("click", outSideClickForEatDaBurger);

btnToOpenFitnessTracker.addEventListener("click", openModalToFitnessTracker);
btnToCloseFitnessTracker.addEventListener("click", closeModalToFitnessTracker);
window.addEventListener("click", outSideClickForFitnessTracker);

btnToOpenWeatherDashBored.addEventListener("click", openModalToWeatherDashBored);
btnToCloseWeatherDashBored.addEventListener("click", closeModalToWeatherDashBored);
window.addEventListener("click", outSideClickForWeatherDashBored);

btnToOpenCodeQuiz.addEventListener("click", openModalToCodeQuiz);
btnToCloseCodeQuiz.addEventListener("click",closeModalToCodeQuiz);
window.addEventListener("click", outSideClickForCodeQuiz);

btnToOpenLocalWire.addEventListener("click", openModalToLocalWire);
btnToCloseLocalWire.addEventListener("click", closeModalToLocalWire);
window.addEventListener("click", outSideClickForLocalWire);











