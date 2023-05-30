function getData(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
    xhr.responseType = 'json';
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = xhr.response;
            callback(data);
        } else {
            console.error("Ошибка при получении данных опроса:", xhr.status);
        }
    };
    xhr.send();
}

function showQstn(data) {
    const pollTitle = document.getElementById("poll__title");
    const pollAnswers = document.getElementById("poll__answers");

    pollTitle.innerText = data.title;

    data.answers.forEach(answer => {
        const answerBtn = document.createElement("button");
        answerBtn.className = "poll__answer";
        answerBtn.innerText = answer;
        answerBtn.addEventListener("click", () => {
            showConfirmationDialog();
        });
        pollAnswers.appendChild(answerBtn);
    });
}

function showConfirmationDialog() {
    alert("Спасибо, ваш голос засчитан!");
}

window.addEventListener("DOMContentLoaded", () => {
    getData(function(pollData) {
        showQstn(pollData.data);
    });
});