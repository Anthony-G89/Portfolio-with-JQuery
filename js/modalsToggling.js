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

$(".learnMoreBtn").on("click", togglePasswordGeneratorModal);
// $(".closeBtnForPasswordGenerator").on("click", () => {
//     toggle();
// })

var closingmodal = () => {
    var closeModal = document.getElementsByClassName(".closeBtnForPasswordGenerator")

    if (closeModal.style.display === "none") {
        closeModal.style.display = "block"
    } else  {
        close.style.display = "none"
    }
}

// $( "closeBtnForPasswordGenerator" ).toggle(
//     function() {
//       $( this ).addClass( "selected" );
//     }, function() {
//       $( this ).removeClass( "selected" );
//     }
//   );

// Closing the modal when clicking on the background
$(".modalBackGroundForWeatherApp").on("click", closeWeatherModalBackground);
$(".modalBackGroundCodeQuiz").on("click", closeCodeQuizModalBackground);
$(".modalBackGroundLocalWire").on("click", closeLocalWireModalBackground);
