const rotatorCase = document.querySelectorAll(".rotator__case");
let currentActiveIndex = 0;
let speed = 0;
let interval;

const rotateElement = () => {
    const prevActiveIndex = currentActiveIndex;
    const nextActiveIndex = currentActiveIndex === rotatorCase.length - 1 ? 0 : currentActiveIndex + 1;

    rotatorCase[prevActiveIndex].classList.remove("rotator__case_active");
    rotatorCase[nextActiveIndex].classList.add("rotator__case_active");

    currentActiveIndex = nextActiveIndex;

    const currentElement = rotatorCase[currentActiveIndex];
    currentElement.style.color = currentElement.dataset.color;
    speed = currentElement.dataset.speed;

    clearInterval(interval);
    interval = setInterval(rotateElement, speed);
};

interval = setInterval(rotateElement, speed);