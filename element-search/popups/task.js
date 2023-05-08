const popup = document.getElementById("modal_main");
popup.classList.add("modal_active");

const modalSuccess = document.querySelector('#modal_success');
const modalClose = document.querySelectorAll('.modal__close');

modalClose.forEach(function (item) {
    item.addEventListener('click', function () {
      popup.classList.remove("modal_active");
    });
});

modalSuccess.addEventListener('click', function() {
    modalSuccess.classList.remove('modal_active');
    popup.classList.add('modal_active');
});