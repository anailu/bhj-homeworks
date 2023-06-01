const modal = document.getElementById("subscribe-modal");
const closeBtn = document.querySelector(".modal__close");

function getCookie(cookieToCheck) {
    const nameCookie = document.cookie.split("; ");
    return nameCookie.includes(cookieToCheck);
}

closeBtn.addEventListener("click", function() {
    modal.classList.remove("modal_active");
    document.cookie = "flag=1";
});

if (!getCookie("flag=1")) {
    modal.classList.add("modal_active");
}