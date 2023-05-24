const chatWidget = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const container = document.querySelector(".chat-widget__messages-container");
const inputField = document.querySelector(".chat-widget__input");
let timeout = null;

const botMessages = [
    "Здравствуйте",
    "Как дела?",
    "Всего доброго",
];

function getTimeNow() {
    const time = new Date();
    return time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
}

function createUserMessage(message) {
    const time = getTimeNow();
    return `
        <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">${message}</div>
        </div>
    `;
}

function createBotMessage(message) {
    const time = getTimeNow();
    return `
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">${message}</div>
        </div>
    `;
}

function getRandomBotMessage(botMessages) {
    return botMessages[Math.floor(Math.random() * botMessages.length)];
}

function scrollToBottom() {
    messages.scrollTop = messages.scrollHeight;
}

chatWidget.addEventListener("click", () => {
    chatWidget.classList.add("chat-widget_active");
    inputField.focus();
});

chatWidget.addEventListener("keydown", event => {
    if (event.code !== "Enter" || inputField.value.length === 0) {
        return;
    };

    messages.innerHTML += createUserMessage(inputField.value);
    messages.innerHTML += createBotMessage(getRandomBotMessage(botMessages));

    inputField.value = "";
    container.scrollTop = container.scrollHeight;
});

inputField.addEventListener("focus", () => {
    timeout = setTimeout(() => {
        messages.innerHTML += createBotMessage("Есть вопросы?");
    }, 30000);
});

inputField.addEventListener("blur", () => {
    clearTimeout(timeout);
})