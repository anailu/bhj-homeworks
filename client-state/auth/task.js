function updateSignIn() {
    const signinElement= document.getElementById("signin");
    const welcomeElement = document.getElementById("welcome");
    const userIdElement = document.getElementById("user_id");
    const userId = localStorage.getItem("user_id");

    if (userId) {
        signinElement.classList.remove("signin_active");
        welcomeElement.classList.add("welcome_active");
        userIdElement.textContent = userId;
    } else {
        signinElement.classList.add("signin_active");
        welcomeElement.classList.remove("welcome_active");
    }
}
  
function submitForm(event) {
    event.preventDefault();

    const signinForm= document.getElementById("signin__form");
    const formData = new FormData(signinForm);

    fetch(signinForm.action, {
    method: "POST",
    body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
        const userId = data.user_id;
        localStorage.setItem("user_id", userId);

        updateSignIn();
        } else {
        alert("Неверный логин/пароль");
        }
    })
    .catch(error => {
        console.error("Ошибка при авторизации:", error);
        alert("Произошла ошибка при авторизации");
    });

    signinForm.reset();
}
  
function logout() {
    localStorage.removeItem("user_id");
    updateSignIn();
}
  
const logoutButton = document.getElementById("logout_btn");
logoutButton.addEventListener("click", logout);

const signinForm = document.getElementById("signin__form");
signinForm.addEventListener("submit", submitForm);

window.addEventListener("load", updateSignIn);