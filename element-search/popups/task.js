const popup = document.getElementById("modal_main");
popup.classList.add("modal_active");

const modalSuccess = document.querySelector("#modal_success");
const modalClose = document.querySelectorAll(".modal__close");
const successModalClose = document.querySelectorAll("#modal_success .modal__close_times");

modalClose.forEach(function (item) {
    item.addEventListener("click", function () {
        const modal = item.closest('.modal');
        modal.classList.remove("modal_active");
    });
});

const showSuccessButton = document.querySelector(".show-success");
showSuccessButton.addEventListener("click", function(e) {
    e.preventDefault();
    popup.classList.remove("modal_active");
    const modalSuccess = document.getElementById("modal_success");
    modalSuccess.classList.add("modal_active");
});

successModalClose.forEach(function(item) {
    item.addEventListener("click", function() {
        const modalSuccess = document.getElementById("modal_success");
        modalSuccess.classList.remove("modal_active");
    });
});